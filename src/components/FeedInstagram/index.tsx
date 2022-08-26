import { InstagramLogo } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TranslateContext } from "../../context/TranslateContext";
import api from "../../service/api";
import { Translation } from "../../service/translation";
import { Loading } from "../Loading";

import styles from './styles.module.scss';

interface Feed {
    id: string
    mediaUrl: string
    caption: string
    permalink: string
}

export function FeedInsta() {

    const {theme} = useContext(ThemeContext)
    const {translate} = useContext(TranslateContext);

    const [loading, setLoading] = useState(false);
    const [feed, setFeed] = useState<Feed[]>([]);
    const language = new Translation();

    useEffect(() => {
        setLoading(true)
        function userReturn() { 
            api.get('https://feeds.behold.so/MObk4m8yDeXIVMwLVrCw').then(response => {
                setFeed(response.data)
            })
        }
        userReturn();
        console.log(feed)
        setLoading(false)
    }, []) 

    return (
        


        <div className={styles['container-'+ theme]}>
            <div className={styles['div-portfolio-title']}>
                <InstagramLogo 
                    size={74}
                    color={'#5D66D7'}
                />
                <h2 className={styles['title']}>{language[translate].instagram.title}</h2>
                <p className={styles['subtitle-' + theme]}>{language[translate].instagram.subtitle}.</p>
            </div>
            { loading == true 
            ? <div className={styles['loading-'+ theme]}><Loading /></div>
            : <ul className={styles.list}>
                {feed.map(post => {
                    return (
                        <li
                            key={post.id}    
                        >
                            <div className={styles.divImage}>
                                <a href={post.permalink} target={"_blank"}>
                                    <img 
                                        className={styles.image}
                                        src={post.mediaUrl} 
                                        alt={post.caption} 
                                    />
                                </a>
                            </div>
                        </li>
                    )
                })}
             </ul>
            }

        </div>
    )
}