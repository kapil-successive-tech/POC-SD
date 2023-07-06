import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import FooterFb from '../images/FooterFb.svg';
import FooterTwitter from '../images/FooterTwitter.svg';
import FooterInsta from '../images/FooterInsta.svg';
import FooterU from '../images/FooterU.svg';
import { getFooterRes } from '../helper';
import { onEntryChange } from '../contentstack-sdk';
import { FooterProps, Entry, Links } from "../typescript/layout";

export default function Footer({ footer, entries }: {footer: FooterProps, entries: Entry}) {

    const [getFooter, setFooter] = useState(footer);
    
    function buildNavigation(ent: Entry, ft: FooterProps) {
      let newFooter = { ...ft };
      if (ent.length !== newFooter.navigation.link.length) {
        ent.forEach((entry) => {
          const fFound = newFooter?.navigation.link.find(
            (nlink: Links) => nlink.title === entry.title
          );
          if (!fFound) {
            newFooter.navigation.link?.push({
              title: entry.title,
              href: entry.url,
              $: entry.$,
            });
          }
        });
      }
      return newFooter;
    }
  
    async function fetchData() {
      try {
        if (footer && entries) {
          const footerRes = await getFooterRes();
          const newfooter = buildNavigation(entries, footerRes);
          setFooter(newfooter);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      onEntryChange(() => fetchData());
    }, [footer]);
  
    const footerData = getFooter ? getFooter : undefined;
    console.log(footerData?.navigation?.link)
    
    return (<>{footerData &&
      <div className='footer-section-wrap'>
           <div className='container'>
               <div className='footer-nav'>
                    <ul>
                        {footerData.navigation.link.map(link => {
                            return <li><a href={link.href} style={{textTransform:'uppercase'}}>{link.title}</a></li>
                        })}
                    </ul>
               </div>
               <span> FOLLOW US</span>
               <ul className='footer-social-icons'>
                    <li>< a href='#'><Image src={FooterFb} alt="fb-icon" height= "30px" width= "30px"/></a></li>
                    <li>< a href='#'><Image src={FooterTwitter} alt="fb-icon" height= "30px" width= "30px"/></a></li>
                    <li>< a href='#'><Image src={FooterInsta} alt="fb-icon" height= "30px" width= "30px"/></a></li>
                    <li>< a href='#'><Image src={FooterU} alt="fb-icon" height= "30px" width= "30px"/></a></li>
               </ul>
           </div>
      </div>}</>
    );
}
