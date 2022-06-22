import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import api from "../../service/api";
import { CardPortfolio } from "../CardPortfolioGit";

import styles from './styles.module.scss';

interface ProjectGit {
    id: number
    owner: {
        avatar_url: string
    }
    name: string
    language: string
    description:string
    stargazers_count:number
}

interface Props {
    renderLoading: (type: boolean) => void
}

export function BodyPortfolio({renderLoading} : Props) {

    const [gitProjectReturn, setProjectReturn] = useState<ProjectGit[]>([]) 
    const {theme} = useContext(ThemeContext)

    useEffect(() => { 
        async function userReturn() {
            renderLoading(true)
            await api.get('/leords/repos').then(response => {
                setProjectReturn(response.data)
            })
        }
        userReturn();
        renderLoading(false)
    }, []) 

    return (
        <div className={styles['container-' + theme]}>
            <div className={styles['div-container-' + theme]}>
                <ul className={styles['list']}>
                    {gitProjectReturn.map(project  => {
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