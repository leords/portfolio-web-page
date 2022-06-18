import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import api from "../../service/api";
import { CardPortfolio } from "../CardPortfolioGit";

import styles from './styles.module.scss';

interface ProjectGit {
    id: number
    avatar_url: string
    name: string
    language: string
    description:string
    stargazers_count:number
}

export function BodyPortfolio() {

    const {theme} = useContext(ThemeContext)

    const [gitProjectReturn, setProjectReturn] = useState() 

    useEffect(() => { 
        async function userReturn() {
            api.get('/leords/repos').then(response => {
                setProjectReturn(response.data)
            }) 
        }
        console.log(gitProjectReturn)
        userReturn();
    }, []) 

    return (
        <div className={styles['container-' + theme]}>
            <div className={styles['div-container-' + theme]}>
                <ul className={styles['list']}>
                    {gitProjectReturn?.map((project: { owner: {avatar_url: string; }; id: number; name: string; language: string; stargazers_count:number }) => {
                        return (
                            <li
                                key={project?.id} 
                            >
                                <div className={styles['card']}>
                                    <CardPortfolio 
                                        avatar_url={project?.owner.avatar_url}
                                        description={project?.name}
                                        language={project?.language}
                                        name={project?.name}
                                        stargazers_count={project?.stargazers_count}
                                    /> 
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}