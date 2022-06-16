import { Moon, Sun } from "phosphor-react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Translation } from "../../service/translation";
import Switch from "../Switch";

import styles from './styles.module.scss';

export function Menu() {

    const {theme, setTheme} = useContext(ThemeContext)

    const translate = new Translation();

    const linguageForTranslate = 'english';


    return(
        <div className={styles['container-' + theme]}>
            <div className={styles['menu-' + theme]}>
                <div className={styles['list']}>
                        <ul className={styles['nav-' + theme]}>
                            <li>
                                <a href="#home">{translate[linguageForTranslate].menu.home}</a> 
                            </li>
                            <li>
                                <a href="#about">About me</a> 
                            </li>
                            <li>
                                <a href="#skills">Skills</a> 
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a> 
                            </li>
                            <li>
                                <a href="#contact">Contact</a> 
                            </li>
                        </ul>
                </div>
                <div className={styles['button-toggle-' + theme]}>
                    {theme == 'light' && (
                        <>
                        <Moon 
                            size={20} 
                            weight={'thin'}
                            color={'orange'}
                        />
                        <p>modo dark</p>
                        </>
                    )}
                    {theme == 'dark' && (
                        <>
                        <Sun 
                            size={20} 
                            weight={'thin'}
                            color={'orange'}
                        />
                        <p>modo light</p>
                        </>
                    )}
                    <Switch />
                </div>
            </div>
        </div>
    )
}