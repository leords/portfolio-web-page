import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { Mydados } from "../../service/project-portfolio";

import styles from './styles.module.scss';

export function Footer() {

    const {theme, setTheme} = useContext(ThemeContext);
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
                            <p>Cell:</p>
                            <p>{personData.person.cell}</p>
                        </div>
                    </div>
                    <div className={styles['div-menu']}>
                        <ul className={styles['menu']}>
                            <li>
                                <a 
                                    href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#about">
                                    About me
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#skills">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact">
                                    Contact
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
                    <p>Leonardo Rodrigues © Copyright 2022. Todos Os Direitos Reservados Aos Proprietários. Desenvolvido por Leords</p>
                </div>
            </div>
        </div>
    )
}