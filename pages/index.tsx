import React, { useState, useEffect, useCallback, useContext } from 'react';
import { onEntryChange } from '../contentstack-sdk';
import RenderComponents from '../components/render-components';
import { getPageRes } from '../helper';
import { LanguageContext } from '../context';
import Skeleton from 'react-loading-skeleton';
import { Props, Context } from "../typescript/pages";

export default function Home(props: Props) {

  const { page, entryUrl } = props;

  const { locale } = useContext(LanguageContext);

  const [getEntry, setEntry] = useState(page);

  const fetchData = useCallback(async () => {
    try {
      const entryRes = await getPageRes(entryUrl, locale);
      if (!entryRes) throw new Error('Status code 404');
      setEntry(entryRes);
    } catch (error) {
      console.error(error);
    }
  }, [locale, entryUrl]);

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [fetchData]);

  return getEntry ? (
    <RenderComponents
      pageComponents={getEntry.page_components}
      contentTypeUid='page'
      entryUid={getEntry.uid}
      locale={getEntry.locale}
    />
  ) : (
    <Skeleton count={3} height={300} />
  );
}

export async function getServerSideProps(context: Context) {
  try {
    const entryRes = await getPageRes(context.resolvedUrl);
    return {
      props: {
        entryUrl: context.resolvedUrl,
        page: entryRes,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
