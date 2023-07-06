import React from 'react';
import styles from './how-to-earn.module.css';
import Image from 'next/image';
import eIcon1 from '../images/eIcon1.svg';

const HowToEarn = ({ content }: { content: any }) => {

    return (
        <>{content &&
            <section className="how_to_earn cs_pt text-center">
                <div className="container">
                    <h2 className="pb-3">
                        {content.title_h2}
                    </h2>
                    <hr />
                    <div className={styles.way_wrapper}>
                        <div className={`row justify-content-between ${content.cards.length > 1 && styles.middle_bar} `}>
                            {content.cards.map((card: any, key: any) => {
                                console.log('card length ', card.buckets.length)
                                return <div className={`${content.cards.length > 1 && styles.csCol}`} key={`card-${card.title_h2}`}>
                                    <h3 className="ff700 mb-2">{card.title_h3}</h3>
                                    <strong className="ff400 d-block mb-2">{card.subtitle_h3}</strong>
                                    <div className="row justify-content-center pt-4 mb-4 pb-3 ">
                                        {card.buckets.map((bucket: any, key: any) => {
                                            return <div className="col-4" key={`bucket-${bucket.title_h3}`}>
                                                <figure className={styles.icon_figure}>
                                                    <figcaption className="ff700" style={{textTransform: 'uppercase'}}>
                                                        {bucket.top_title}
                                                    </figcaption>
                                                    <span className={`ratio_eq ratio_contain mx-auto cs_ratio ${styles.cs_ratio} `}><Image src={bucket.icon.url} layout='fill' alt="Icon" className="mr-2" /></span>
                                                    <figcaption className="ff700">
                                                        {bucket.title_h3}
                                                    </figcaption>
                                                </figure>
                                                <p className="col-8 mx-auto">{bucket.description}</p>
                                            </div>
                                        })}
                                    </div>
                                    <p className="col-8 mx-auto">{card.description}</p>
                                </div>;
                            })}
                        </div>
                    </div>
                </div>
            </section>
        }
        </>
    )
}
export default HowToEarn;