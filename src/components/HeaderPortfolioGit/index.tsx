import { GithubLogo, Moon, Sun, UploadSimple } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import api from "../../service/api";
import Switch from "../Switch";

import styles from './styles.module.scss';

interface UserGit {
    avatar_url: string,
    login: string,
    html_url: string, 
    name: string, 
    bio: string, 
    public_repos: number
}

interface Props {
    renderLoading: (type: boolean) => void
}

export function Header({renderLoading} : Props) {
    const [gitUserReturn, setGitUserReturn] = useState<UserGit>() 
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        async function userReturn() {
            await renderLoading(true)
            api.get('/leords').then(response => {
                setGitUserReturn(response.data)
            })
        }
        userReturn();
        renderLoading(false)
    }, []) 

    return(
        <div className={styles['container-' + theme]}>
            <div className={styles['container-div-' + theme]}>
                <div className={styles['div-switch-' + theme]}>
                    <div className={styles['switch']}>
                        {theme == 'light' && (
                            <>
                            <Moon 
                                size={20} 
                                weight={'thin'}
                                color={'orange'}
                            />
                            <p className={styles['mode-' + theme]}>modo dark</p>
                            </>
                        )}
                        {theme == 'dark' && (
                            <>
                            <Sun 
                                size={20} 
                                weight={'thin'}
                                color={'orange'}
                            />
                            <p className={styles['mode-' + theme]}>modo light</p>
                            </>
                        )}
                        <Switch />
                    </div>
                </div>
                <div className={styles['div-user-' + theme]}>
                    <div className={styles['div-image-user']}>
                        <img src={gitUserReturn?.avatar_url} alt="" />
                    </div>
                    <div className={styles['div-text-user-' + theme]}>
                        <h1 className={styles['user-title-' + theme]}>{gitUserReturn?.name}</h1>
                        <p className={styles['user-bio-' + theme]}>{gitUserReturn?.bio}</p>
                        <div className={styles['div-logo']}>
                            <a href="">
                                <GithubLogo 
                                    size={32}
                                />
                            </a>
                            <a href="">
                                <p className={styles['user-login-' + theme]}>{gitUserReturn?.login}</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles['div-phrase-' + theme]}>
                    <p className={styles['phrase-' + theme]}>A Brazilian developer passionate about technology, looking to learn more and more.</p>
                </div>
                <div className={styles['div-counter-project-' + theme]}>
                    <UploadSimple 
                        size={32} 
                    />
                    <p className={styles['counter-' + theme]}>{gitUserReturn?.public_repos}</p>
                </div>
            </div>
        </div>
    )
}