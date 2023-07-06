
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onEntryChange } from '../contentstack-sdk';
import { getHeaderRes } from '../helper';
import { HeaderProps, Entry, NavLinks } from "../typescript/layout";
import styles from './header.module.css';
import Image from 'next/image';

export default function Header({ header, entries }: { header: HeaderProps, entries: Entry }) {

  const router = useRouter();
  const [getHeader, setHeader] = useState(header);
  const [isActive, setIsActive] = useState(false);


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

  const handleClick = () => {
    setIsActive(!isActive);
  };


  const containerClasses = isActive ? 'right_nav active' : 'right_nav';


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

        <span  onClick={handleClick} className="reponsive-menu">
             <span></span>
             <span></span>
             <span></span>
        </span>
        
        <div className={containerClasses}>
          <div className={styles.nav_top_right}>
            <div className="d-flex align-items-center">
              {headerData.navigation_menu.upper_nav.map((value, key) => {
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