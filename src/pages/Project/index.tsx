import React, { useEffect, useState } from "react";
import { BodyPortfolio } from "../../components/BodyPortfolioGit";
import { Header } from "../../components/HeaderPortfolioGit";
import api from "../../service/api";

import styles from './styles.module.scss';

export function Project() {


const [listOfAllProjects, setlistOfAllProjects] = useState([])

    useEffect(() => {
        async function ProjectsReturn() {
            api.get('/leords/repos').then(response => {
                setlistOfAllProjects(response.data)
            })
        }
        console.log(listOfAllProjects)
        ProjectsReturn();
    },[])


    return(
        <div className={styles['container']}>
            <Header />
            <BodyPortfolio />
        </div>
    )
}