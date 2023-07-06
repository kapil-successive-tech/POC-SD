
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Tooltip from './tool-tip';
import { onEntryChange } from '../contentstack-sdk';
import { getHeaderRes } from '../helper';
import Skeleton from 'react-loading-skeleton';
import { HeaderProps, Entry, NavLinks } from "../typescript/layout";
import styles from './header.module.css';
import Image from 'next/image';
// import myLogo from '../../images/GoToPass logo 1.svg';  
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';


export default function Header({ header, entries }: { header: HeaderProps, entries: Entry }) {

  const router = useRouter();
  const [getHeader, setHeader] = useState(header);

  function buildNavigation(ent: Entry, hd: HeaderProps) {
    let newHeader = { ...hd };
    if (ent.length !== newHeader.navigation_menu.length) {
      ent.forEach((entry) => {
        const hFound = newHeader?.navigation_menu.find(
          (navLink: NavLinks) => navLink.label === entry.title
        );
        if (!hFound) {
          newHeader.navigation_menu?.push({
            label: entry.title,
            page_reference: [
              { title: entry.title, url: entry.url, $: entry.$ },
            ],
            $: {}
          });
        }
      });
    }
    return newHeader
  }

  async function fetchData() {
    try {
      if (header && entries) {
        const headerRes = await getHeaderRes();
        const newHeader = buildNavigation(entries, headerRes)
        setHeader(newHeader);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (header && entries) {
      onEntryChange(() => fetchData());
    }
  }, [header]);
  const headerData = getHeader ? getHeader : undefined;

  return headerData ?
    <header id="site_header" className={styles.site_header}>
      <nav className={styles.navbar}>
        <a href="#" className="nav-brand">
          <img
            src={headerData.logo.url}
            alt={headerData.title}
            title={headerData.title}
            {...headerData.logo.$?.url as {}} />
        </a>

        <div className="right_nav">
          <div className={styles.nav_top_right}>
            <div className="d-flex align-items-center">
              {headerData.navigation_menu.upper_nav.map((value, key) => {
                console.log(value);
                return <>{value.left_icon && <Image src={require(`../images/${value.icon_name}.svg`)} alt="Icon" width="30px" />} <a href="#"  className="mr-2">{value.label}</a></>
              })}
            </div>
          </div>
          <div className={styles.nav_bottom_right}>
            <div className="d-flex align-items-center">
              {headerData.navigation_menu.lower_nav.map((value, key) => {
                return <>
                  {value.left_icon && <Image src={require(`../images/${value.icon_name}.svg`)} alt="Icon" width="30px" className="mr-2" />}
                  {value.highlighted ? <div className={`d-flex ${styles.a_bar} mr-4`}> <a href="#" className="cs_btn btn_small ">{value.label}</a> </div> :
                    <a href="#" className={`d-flex ${styles.a_bar} mr-4`}>{value.label}</a>}
                </>
              })}
            </div>
          </div>
        </div>
      </nav>
    </header> : <div></div>
}