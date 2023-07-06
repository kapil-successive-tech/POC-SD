import React from "react";
import styles from './how-to-earn.module.css';
import Image from 'next/image';
import eIcon1 from '../images/eIcon1.svg';   
import eIcon2 from '../images/eIcon2.svg';   
import eIcon3 from '../images/eIcon3.svg';   
import eIcon4 from '../images/eIcon4.svg';   



const HowToEarn = () => {
    return (
        <>
             <section className="how_to_earn cs_pt text-center">
                <div className="container">
                    <h2 className="pb-3">
                    How to Earn
                    </h2>
                    <hr />
                    <div className={styles.way_wrapper}>
                        <div className={`row justify-content-between ${styles.middle_bar} `}> 
                            <div className={styles.csCol}> 
                                <h3 className="ff700 mb-2">EARN POINTS</h3>
                                <strong className="ff400 d-block mb-2">XX ¥ spent = X points.</strong>
                                <div className="row justify-content-center pt-4 mb-4 pb-3 ">
                                    <div className="col-4">   
                                        <figure className={styles.icon_figure}>
                                            <span className={`ratio_eq ratio_contain mx-auto cs_ratio ${styles.cs_ratio} `}><Image src={eIcon1} alt="Icon" className="mr-2"/></span>
                                            
                                            <figcaption className="ff700">
                                                STAY
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-4">
                                        <figure className={styles.icon_figure}>
                                            <span className={`ratio_eq ratio_contain mx-auto cs_ratio ${styles.cs_ratio} `}><Image src={eIcon2} alt="Icon" className="mr-2"/></span>
                                            
                                            <figcaption className="ff700">
                                            GOLF
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-4">
                                        <figure className={styles.icon_figure}>
                                            <span className={`ratio_eq ratio_contain mx-auto cs_ratio ${styles.cs_ratio} `}><Image src={eIcon3} alt="Icon" className="mr-2"/></span>
                                            
                                            <figcaption className="ff700">
                                            ONSEN
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <p className="col-8 mx-auto">Earn points across all of our partner brands.</p>
                            </div>
                            <div className={styles.csCol}> 
                                <h3 className="ff700 mb-2">EARN TIER YUZUS</h3>
                                <strong className="ff400 d-block mb-2">24 Yuzus qualifies you for Platinum status.</strong>
                                <div className="row justify-content-center pt-4 mb-4 pb-3 ">
                                    <div className="col-4">   
                                        <figure className={styles.icon_figure}>
                                            <span className={`ratio_eq ratio_contain mx-auto cs_ratio ${styles.cs_ratio} `}><Image src={eIcon2} alt="Icon" className="mr-2"/></span>
                                            
                                            <figcaption className="ff700">
                                            1 Tier Yuzu
                                            <p className="ff400">Play any Accordia course, including urban simulator properties</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-4">
                                        <figure className={styles.icon_figure}>
                                            <span className={`ratio_eq ratio_contain mx-auto cs_ratio ${styles.cs_ratio} `}><Image src={eIcon1} alt="Icon" className="mr-2"/></span>
                                            
                                            <figcaption className="ff700">
                                            2 Tier Yuzus
                                            <p className="ff400">Hotel MyStays, Art Hotels,
MyStays Resorts, Kamenoi</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-4">
                                        <figure className={styles.icon_figure}>
                                            <span className={`ratio_eq ratio_contain mx-auto cs_ratio ${styles.cs_ratio} `}><Image src={eIcon4} alt="Icon" className="mr-2"/></span>
                                            
                                            <figcaption className="ff700">
                                            1 Tier Yuzu
                                            <p className="ff400">Stay at any Flexstay Inn or MyCube properties</p>
                                            </figcaption> 
                                        </figure>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
             </section>
        </>
    )
}
export default HowToEarn;