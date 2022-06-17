import { Campfire, GameController, Heart, MusicNote, User } from "phosphor-react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TranslateContext } from "../../context/TranslateContext";
import { Translation } from "../../service/translation";

import styles from './styles.module.scss';

export function About() {

    const {theme, setTheme} = useContext(ThemeContext);
    const {translate, setTranslate} = useContext(TranslateContext);

    const language = new Translation();

    return(
        <div className={styles['container-' + theme]}>
                <div className={styles['div-about-' + theme]}>
                    <User 
                        size={62}
                        color={'#5D66D7'}
                    />
                    <h2 className={styles['title-' + theme]}>{language[translate].about.title}</h2>
                    <p className={styles['subtitle-' + theme]}>{language[translate].about.subtitle}</p>
                </div>
                <div className={styles['div-icone-' + theme]}>
                    <div className={styles['icones-row-1-' + theme]}>
                        <div className={styles['icone-1-' + theme]}>
                            <div className={styles['div-logo']}>
                                <Heart 
                                    size={65}
                                    color={'#5D66D7'}                        
                                />
                            </div>
                            <ul>
                                <li className={styles['list-' + theme]}>{language[translate].about.heart.heartFirstItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.heart.heartSecondItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.heart.heartThirdItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.heart.heartFourthItem}</li>
                            </ul>
                        </div>
                        <div className={styles['icone-2-' + theme]}>
                            <div className={styles['div-logo']}>
                                <MusicNote
                                    size={65}
                                    color={'#5D66D7'}                            
                                />
                            </div>
                            <ul>
                                <li className={styles['list-' + theme]}>{language[translate].about.music.musicFirstItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.music.musicSecondItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.music.musicThirdItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.music.musicFourthItem}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['icones-row-2-' + theme]}>
                        <div className={styles['icone-3-' + theme]}>
                            <div className={styles['div-logo']}>
                                <GameController 
                                    size={65}
                                    color={'#5D66D7'}                            
                                />
                            </div>
                            <ul>
                                <li className={styles['list-' + theme]}>{language[translate].about.game.gameFirstItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.game.gameSecondItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.game.gameThirdItem}</li>
                            </ul>
                        </div>
                        <div className={styles['icone-4-' + theme]}>
                            <div className={styles['div-logo']}>
                                <Campfire 
                                    size={65}
                                    color={'#5D66D7'}                            
                                />
                            </div>
                            <ul>
                                <li className={styles['list-' + theme]}>{language[translate].about.aventure.aventureFirstItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.aventure.aventureSecondItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.aventure.aventureThirdItem}</li>
                                <li className={styles['list-' + theme]}>{language[translate].about.aventure.aventureFourthItem}</li>
                            </ul>
                        </div>      
                    </div>
                </div>
        </div>
    )
}