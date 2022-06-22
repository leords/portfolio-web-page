import { FolderNotchOpen } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Card } from "../Card";
import { useNavigate } from "react-router-dom";

import styles from './styles.module.scss';

import {MyPortfolio} from '../../service/project-portfolio'
import { Translation } from "../../service/translation";
import { TranslateContext } from "../../context/TranslateContext";


export function Portfolio() {

    const {theme} = useContext(ThemeContext);
    const {translate} = useContext(TranslateContext);
    const nagivate = useNavigate()

    const language = new Translation();
    const manuallyInsertedProjects = new MyPortfolio()

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
                                    image={manuallyInsertedProjects[translate].firstProject.image}
                                    descripition={manuallyInsertedProjects[translate].firstProject.descripition}
                                    tech={manuallyInsertedProjects[translate].firstProject.tech}
                                    link={manuallyInsertedProjects[translate].firstProject.link}
                                />
                            </div> 
                        </li>
                        <li>
                            <div className={styles['card-' + theme]}>
                                <Card 
                                    image={manuallyInsertedProjects[translate].SecondProject.image}
                                    descripition={manuallyInsertedProjects[translate].SecondProject.descripition}
                                    tech={manuallyInsertedProjects[translate].SecondProject.tech}
                                    link={manuallyInsertedProjects[translate].SecondProject.link}
                                />
                            </div> 
                        </li>
                        <li>
                            <div className={styles['card-' + theme]}>
                                <Card 
                                    image={manuallyInsertedProjects[translate].ThirdProject.image}
                                    descripition={manuallyInsertedProjects[translate].ThirdProject.descripition}
                                    tech={manuallyInsertedProjects[translate].ThirdProject.tech}
                                    link={manuallyInsertedProjects[translate].ThirdProject.link}
                                />
                            </div> 
                        </li>
                        <li>
                            <div className={styles['card-' + theme]}>
                                <Card 
                                    image={manuallyInsertedProjects[translate].FourthProject.image}
                                    descripition={manuallyInsertedProjects[translate].FourthProject.descripition}
                                    tech={manuallyInsertedProjects[translate].FourthProject.tech}
                                    link={manuallyInsertedProjects[translate].FourthProject.link}
                                />
                            </div> 
                        </li>
                    </ul>
                    <div className={styles['div-link-portfolio-complete']}>
                        <a 
                            href=""
                            className={styles['link-portfolio-complete-' + theme]}
                            onClick={() => {
                                nagivate('/portfolio')
                            }}
                        >
                            {language[translate].portfolio.link}
                        </a>
                    </div>
            </div>
        </div>
    )
}

