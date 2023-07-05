
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

  return (
    <>
      {headerData ?
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
                    return <>{value.left_icon && <Image src={icon3} alt="Icon" width="30px" className="mr-2" />} <a href="#">{value.label}</a></>
                  })}
                </div>
              </div>
              <div className={styles.nav_bottom_right}>
                <div className="d-flex align-items-center ml-4 justify-content-end">
                  {headerData.navigation_menu.lower_nav.map((value, key) => {
                    return <>
                      {value.left_icon && <Image src={icon2} alt="Icon" width="30px" className="mr-2" />} 
                      {value.highlighted ? <div className={`d-flex ${styles.a_bar} mr-4`}> <a href="#" className="cs_btn btn_small ">{value.label}</a> </div>:
                      <div className={`d-flex ${styles.a_bar} mr-4`}><a href="#">{value.label}</a></div>}
                    </>
                  })}
                </div>
              </div>
              {/* <div className="right_nav">
              <div className={styles.nav_top_right}>
                <div className="d-flex align-items-center"><Image src={icon3} alt="Icon" width="30px" className="mr-2" /> <a href="#">{headerData.navigation_menu.upper_nav[0].label}</a><a href="#">ENGLISH</a></div>
                <div className="pl-3 d-flex align-items-center ">
                  <a href="#" className="d-flex align-items-center"><Image src={icon1} alt="Icon" width="30px" className="mr-2" />Faq</a>
                  <a href="#">News</a>
                  <a href="#">Book</a>
                </div>
              </div>
              <div className={styles.nav_bottom_right}>
                <div className="d-flex align-items-center ml-4 justify-content-end">
                  <div className={`d-flex ${styles.a_bar} mr-4`}>
                    <a href="#">ABOUT GO TO PASS</a>
                    <a href="#">MEMBER  BENEFITS</a>
                  </div>
                  <a href="#" className="cs_btn btn_small ">JOIN GO TO PASS</a>
                  <a href="#" className="d-flex align-items-center ml-3"><Image src={icon2} alt="Icon" width="30px" className="mr-2" />Login </a>
                </div>

              </div> */}
            </div>
          </nav>
        </header> : <div></div>}
    </>
    // <header className='header'>
    //   <div className='note-div'>
    //     {headerData?.notification_bar.show_announcement ? (
    //       typeof headerData.notification_bar.announcement_text === 'string' && (
    //         <div {...headerData.notification_bar.$?.announcement_text as {}}>
    //           {parse(headerData.notification_bar.announcement_text)}
    //         </div>
    //       )
    //     ) : (
    //       <Skeleton />
    //     )}
    //   </div>
    //   <div className='max-width header-div'>
    //     <div className='wrapper-logo'>
    //       {headerData ? (
    //         <Link href='/'>
    //           <a className='logo-tag' title='Contentstack'>
    //             <img
    //               className='logo'
    //               src={headerData.logo.url}
    //               alt={headerData.title}
    //               title={headerData.title}
    //               {...headerData.logo.$?.url as {}}
    //             />
    //           </a>
    //         </Link>
    //       ) : (
    //         <Skeleton width={150} />
    //       )}
    //     </div>
    //     <input className='menu-btn' type='checkbox' id='menu-btn' />
    //     <label className='menu-icon' htmlFor='menu-btn'>
    //       <span className='navicon' />
    //     </label>
    //     <nav className='menu'>
    //       <ul className='nav-ul header-ul'>
    //         {headerData ? (
    //           headerData.navigation_menu.map((list) => {
    //             const className =
    //               router.asPath === list.page_reference[0].url ? 'active' : '';
    //             return (
    //               <li
    //                 key={list.label}
    //                 className='nav-li'
    //                 {...list.page_reference[0].$?.url as {}}
    //               >
    //                 <Link href={list.page_reference[0].url}>
    //                   <a className={className}>{list.label}</a>
    //                 </Link>
    //               </li>
    //             );
    //           })
    //         ) : (
    //           <Skeleton width={300} />
    //         )}
    //       </ul>
    //     </nav>

    //     <div className='json-preview'>
    //       <Tooltip content='JSON Preview' direction='top' dynamic={false} delay={200} status={0}>
    //         <span data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
    //           <img src='/json.svg' alt='JSON Preview icon' />
    //         </span>
    //       </Tooltip>
    //     </div>
    //   </div>
    // </header>
  );
}