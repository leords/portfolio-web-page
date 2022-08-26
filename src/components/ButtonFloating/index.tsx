import React, { useContext } from "react";
import { Mydados } from "../../service/project-portfolio";

import styles from './styles.module.scss';

import whatsAppLogo from '../../assets/icones/whatsapp.png';
import linkedInLogo from '../../assets/icones/linkedin.png';
import githubLogo from '../../assets/icones/github.png';
import { ThemeContext } from "../../context/ThemeContext";

export function ButtonFloating() {

    const link = new Mydados()
    const {theme} = useContext(ThemeContext)

    return(
        <div className={styles['container-'+ theme]}>
            <a href={link.person.whatsapp} target={"_blank"}>
                <img className={styles.img} src={whatsAppLogo} alt="Abrir conversa no WhatsApp" />
            </a>
            <a href={link.person.linkedin} target={"_blank"}>
                <img className={styles.img} src={linkedInLogo} alt="Abrir perfil no LinkedIn" />
            </a>
            <a href={link.person.github} target={"_blank"}>
                <img className={styles.img} src={githubLogo} alt="Abrir perfil no Github" />
            </a>
        </div>
    )
}