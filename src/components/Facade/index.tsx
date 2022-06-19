import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from './styles.module.scss';

import frame from '../../assets/person/frame.png';
import person from '../../assets/person/person01.png';
import { AddressBook, User } from "phosphor-react";
import { TranslateContext } from "../../context/TranslateContext";
import { Translation } from "../../service/translation";
import { Mydados } from "../../service/project-portfolio";

export function Facade() {

    const {translate} = useContext(TranslateContext)
    const {theme} = useContext(ThemeContext)

    const language = new Translation();
    const dados = new Mydados();

    return(
        <div className={styles['container-' + theme]}>
           <div className={styles['div-' + theme]}>
                <div className={styles['div-text-' + theme]}>
                    <h1 className={styles['title-' + theme]}>{language[translate].facade.name}</h1>
                    <h1 className={styles['title-' + theme]}>Leonardo.</h1>
                    <h1>{language[translate].facade.profession}</h1>
                    <p className={styles['subtitle-' + theme]}>{language[translate].facade.descripition}</p>

                    <div className={styles['div-button']}>
                        <a 
                            href={dados.person.whatsapp}
                            target={'_blank '}
                            className={styles['link']}
                        >
                            <button className={styles['button-for-contact']}>
                                <User 
                                    size={20} 
                                    weight={'regular'}
                                />
                                <p>{language[translate].facade.button.buttonContact}</p>
                            </button>
                        </a>
                        <a 
                            href={dados.person.download}
                            target={'_blank'}
                            className={styles['link']}
                        >
                            <button className={styles['button-for-download']}>
                                <AddressBook 
                                    size={22} 
                                    weight={'regular'}
                                />
                                <p>{language[translate].facade.button.buttonCV}</p>
                            </button>
                        </a>
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