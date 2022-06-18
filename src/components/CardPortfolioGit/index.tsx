import { Star } from "phosphor-react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from './styles.module.scss';

interface Props {
    avatar_url: string
    name: string
    language: string
    description:string
    stargazers_count: number
}

export function CardPortfolio({avatar_url, name, language, description, stargazers_count} : Props) { 

    const {theme} = useContext(ThemeContext);

    return (
        <div className={styles['container']}>
                <img src={avatar_url} alt="" />
            <div className={styles['div-container-' + theme]}>
                <div className={styles['div-logo-' + theme]}>
                    {stargazers_count == 1 && (
                        <div className={styles['logo']}>
                            <Star 
                                size={25} 
                                weight={'duotone'}
                            /> 
                        </div>
                    )}
                </div>
                <div className={styles['container-text-' + theme]}> 
                    <div className={styles['div-text-' + theme]}>
                        <h1 className={styles['name-' + theme]}>{name}</h1>
                        <p className={styles['languague']}>Languague</p>
                        <p className={styles['tech-' + theme]}>{language}</p>
                        <p className={styles['description-title']}>Description</p>
                    </div>
                    <div className={styles['container-description-' + theme]}>
                        <div className={styles['div-description-' + theme]}>
                            <p className={styles['description-' + theme]}>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}