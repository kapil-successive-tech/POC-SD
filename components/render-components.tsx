import React from 'react';

import HeroSection from './hero-section';
import { RenderProps } from "../typescript/component";
import HowToEarn from './how-to-earn';
import MembershipTiers from './membership-tiers';
import Brands from './brands';

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
          return <HeroSection {...component.hero_section} key={`component-${key}`} />;
        }
        if (component.section_with_cards) {
          return null;
        }
        if (component.section_with_buckets) {
          return <HowToEarn content={component.section_with_buckets} key={`component-${key}`} />;
        }
        if (component.section_with_tables) {
          return <MembershipTiers {...component.section_with_tables} key={`component-${key}`} />;
        }
        if (component.our_brands) {
          return <Brands brands={component.our_brands.brands_reference} />
        }
      })}
    </div>
  );
}
