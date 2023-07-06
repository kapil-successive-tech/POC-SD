import React from 'react';
import Image from 'next/image';
import FooterFb from '../images/FooterFb.svg';
import FooterTwitter from '../images/FooterTwitter.svg';
import FooterInsta from '../images/FooterInsta.svg';
import FooterU from '../images/FooterU.svg';

export default function Footer(props: any) {
    // const { title_h2, description, group } = props;
    return (
      <div className='footer-section-wrap'>
           <div className='container'>
               <div className='footer-nav'>
                    <ul>
                        <li><a href='#'>ABOUT PROGRAM</a></li>
                        <li><a href='#'>MEMBER BENEFITS</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>TERMS & CONDITIONS</a></li>
                        <li><a href='#'>PRIVACY POLICY</a></li>  
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
      </div>
    );
}
