import { FolderNotchOpen } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import api from "../../service/api";
import { Card } from "../Card";

import styles from './styles.module.scss';

import {MyPortfolio} from '../../service/project-portfolio'
import { Translation } from "../../service/translation";
import { TranslateContext } from "../../context/TranslateContext";


export function Portfolio() {

    const {theme, setTheme} = useContext(ThemeContext);
    const {translate, setTranslate} = useContext(TranslateContext);

    const language = new Translation();
    const listPortfolioPage = new MyPortfolio()

    return(
        <div className={styles['container-' + theme]}>
            <div className={styles['container-div']}>
                <div className={styles['div-portfolio-title']}>
                    <FolderNotchOpen 
                        size={74}
                        color={'#5D66D7'}
                    />
                    <h2 className={styles['title']}>{language[translate].portfolio.title}</h2>
                    <p className={styles['subtitle-' + theme]}>{language[translate].portfolio.subtitle}.</p>
                </div>
                    <ul className={styles['container-card']}>
                        <li>
                            <div className={styles['card-' + theme]}>
                                <Card 
                                    image={listPortfolioPage.project01.image}
                                    descripition={listPortfolioPage.project01.descripition}
                                    tech={listPortfolioPage.project01.tech}
                                    link={listPortfolioPage.project01.link}
                                />
                            </div> 
                        </li>
                        <li>
                            <div className={styles['card-' + theme]}>
                                <Card 
                                    image={listPortfolioPage.project02.image}
                                    descripition={listPortfolioPage.project02.descripition}
                                    tech={listPortfolioPage.project02.tech}
                                    link={listPortfolioPage.project02.link}
                                />
                            </div> 
                        </li>
                        <li>
                            <div className={styles['card-' + theme]}>
                                <Card 
                                    image={listPortfolioPage.project03.image}
                                    descripition={listPortfolioPage.project03.descripition}
                                    tech={listPortfolioPage.project03.tech}
                                    link={listPortfolioPage.project03.link}
                                />
                            </div> 
                        </li>
                        <li>
                            <div className={styles['card-' + theme]}>
                                <Card 
                                    image={listPortfolioPage.project04.image}
                                    descripition={listPortfolioPage.project04.descripition}
                                    tech={listPortfolioPage.project04.tech}
                                    link={listPortfolioPage.project04.link}
                                />
                            </div> 
                        </li>
                    </ul>
                    <div className={styles['div-link-portfolio-complete']}>
                        <a 
                            href=""
                            className={styles['link-portfolio-complete-' + theme]}
                        >
                            {language[translate].portfolio.link}
                        </a>
                    </div>
            </div>
        </div>
    )
}


/* const [listProject, setListProject] = useState([])
useEffect(() => {
    async function returnAllGitProject() {
        api.get('/leords/repos').then(response => {
            setListProject(response.data)
        })
    }

    console.log(listProject)

    returnAllGitProject()
},[]) */