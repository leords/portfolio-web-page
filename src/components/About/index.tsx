import { Campfire, GameController, Heart, MusicNote, User } from "phosphor-react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from './styles.module.scss';

export function About() {

    const {theme, setTheme} = useContext(ThemeContext);

    return(
        <div className={styles['container-' + theme]}>
                <div className={styles['div-about-' + theme]}>
                    <User 
                        size={62}
                        color={'#5D66D7'}
                    />
                    <h2 className={styles['title-' + theme]}>About Me</h2>
                    <p className={styles['subtitle-' + theme]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                                <li className={styles['list-' + theme]}>God</li>
                                <li className={styles['list-' + theme]}>Family</li>
                                <li className={styles['list-' + theme]}>Girlfriend</li>
                                <li className={styles['list-' + theme]}>Friends</li>
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
                                <li className={styles['list-' + theme]}>Rock</li>
                                <li className={styles['list-' + theme]}>Countryside</li>
                                <li className={styles['list-' + theme]}>Pop</li>
                                <li className={styles['list-' + theme]}>Samba</li>
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
                                <li className={styles['list-' + theme]}>MMORPG</li>
                                <li className={styles['list-' + theme]}>Running</li>
                                <li className={styles['list-' + theme]}>Aventure</li>
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
                                <li className={styles['list-' + theme]}>Fishing</li>
                                <li className={styles['list-' + theme]}>Camping</li>
                                <li className={styles['list-' + theme]}>Trail</li>
                                <li className={styles['list-' + theme]}>Travel</li>
                            </ul>
                        </div>      
                    </div>
                </div>
        </div>
    )
}