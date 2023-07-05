import React from 'react';

// import Section from './section';
// import HeroBanner from './hero-banner';
// import BlogBanner from './blog-banner';
// import CardSection from './card-section';
// import TeamSection from './team-section';
// import BlogSection from './blog-section';
// import SectionBucket from './section-bucket';
// import AboutSectionBucket from './about-section-bucket';
// import SectionWithHtmlCode from './section-with-html-code';
import { RenderProps } from "../typescript/component";

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component: any, key: number) => {
        if (component.hero_section) {
          return null;
        }
        if (component.section_with_cards) {
          return null;
        }
        if (component.section_with_buckets) {
          return null;
        }
        if (component.section_with_tables) {
          return null;
        }
        if (component.our_brands) {
          return null;
        }
      })}
    </div>
  );
}
