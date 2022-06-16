import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from './styles.module.scss';

import frame from '../../assets/person/frame.png';
import person from '../../assets/person/person01.png';
import { AddressBook, User } from "phosphor-react";
import { TranslateContext } from "../../context/TranslateContext";

export function Facade() {

    const {translate} = useContext(TranslateContext)
    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <div className={styles['container-' + theme]}>
           <div className={styles['div-' + theme]}>
                <div className={styles['div-text-' + theme]}>
                    <h1 className={styles['title-' + theme]}>Hello, My Name's</h1>
                    <h1 className={styles['title-' + theme]}>Leonardo.</h1>
                    <h1>I'm developer</h1>
                    <p className={styles['subtitle-' + theme]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <div className={styles['div-button']}>
                        <button className={styles['button-for-contact']}>
                            <User 
                                size={20} 
                                weight={'regular'}
                            />
                            <p>Contact me</p>
                        </button>
                        <button className={styles['button-for-download']}>
                            <AddressBook 
                                size={22} 
                                weight={'regular'}
                            />
                            <p>Download CV</p>
                        </button>
                    </div>
                </div>
                <div className={styles['div-image-' + theme]}>
                    <div className={styles['div-background']}>
                        <img src={frame} alt="" />
                    </div>
                    <img 
                        className={styles['image']}
                        src={person} 
                        alt="photo of the professional representing the page." 
                    />
                </div>
           </div>
        </div>
    )
}