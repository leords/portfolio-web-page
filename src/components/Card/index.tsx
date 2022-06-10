import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from './styles.module.scss';

interface Props {
    image: string,
    descripition: string,
    tech: string,
    link: string
}


export function Card({image, descripition, tech, link}: Props) {

    const {theme, setTheme} = useContext(ThemeContext)


    return (
        <div className={styles['container-' + theme]}>
            <div className={styles['div-image-' + theme]}>
                <img src={image} alt="" />
            </div>
            <div className={styles['div-text-' + theme]}>
                <h2 className={styles['title-description-' + theme]}>Description</h2>
                <p className={styles['description-' + theme]}>{descripition}</p>
                <h2 className={styles['title-tech-' + theme]}>Techs</h2>
                <p className={styles['techs-' + theme]}>{tech}</p>
            </div>
            <div className={styles['div-link']}>
                <a 
                    href={link}
                    target={'_blank'} 
                    className={styles['link']}>
                    Código no Github
                </a>
            </div>
        </div>
    )
}