import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TranslateContext } from "../../context/TranslateContext";

import { Mydados } from "../../service/project-portfolio";
import { Translation } from "../../service/translation";

import styles from './styles.module.scss';

export function Footer() {

    const {theme, setTheme} = useContext(ThemeContext);
    const {translate, setTranslate} = useContext(TranslateContext);

    const language = new Translation();
    const personData = new Mydados()

    return (
        <div className={styles['container']}>
            <div className={styles['container-div-' + theme]}>
                <div className={styles['div-text']}>
                    <div className={styles['div-person']}>
                        <h2>{personData.person.name}</h2>
                        <div className={styles['email']}>
                            <p>Email:</p>
                            <p>{personData.person.email}</p>
                        </div>
                        <div className={styles['cell']}>
                            <p>{language[translate].footer.menu.cell}:</p>
                            <p>{personData.person.cell}</p>
                        </div>
                    </div>
                    <div className={styles['div-menu']}>
                        <ul className={styles['menu']}>
                            <li>
                                <a 
                                    href="#home">
                                    {language[translate].footer.menu.home}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#about">
                                    {language[translate].footer.menu.about}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#skills">
                                    {language[translate].footer.menu.skills}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#portfolio">
                                    {language[translate].footer.menu.portfolio}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact">
                                    {language[translate].footer.menu.contact}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles['div-logo']}>
                    <a  
                        href={personData.person.linkedin}
                        target={'_blank'}>
                        <LinkedinLogo 
                            size={32}
                            color={'#FFFFFF'}
                        />
                    </a>
                    <a  
                        href={personData.person.facebook}
                        target={'_blank'}>
                        <FacebookLogo 
                            size={32}
                            color={'#FFFFFF'}
                        />
                    </a>
                    <a  
                        href={personData.person.instagram}
                        target={'_blank'}>
                        <InstagramLogo 
                            size={32}
                            color={'#FFFFFF'}
                        />
                    </a>
                    <a  
                        href={personData.person.whatsapp}
                        target={'_blank'}>
                        <WhatsappLogo 
                            size={32}
                            color={'#FFFFFF'}
                        />
                    </a>
                </div>
                <div className={styles['div-dev']}>
                    <p>{language[translate].footer.copyright}</p>
                </div>
            </div>
        </div>
    )
}