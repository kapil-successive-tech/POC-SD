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
import HowToEarn from './how-to-earn';

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
        // if (component.members_benefits) {
        //   return <MembersBenefits key={`component-${key}`} banner={{ banner_description: component.members_benefits.description, banner_title: component.members_benefits.title }} />
        // }
        // if(true){
          return <HowToEarn content={component.section_with_buckets}/>
        // }
        

      })}
    </div>
  );
}
