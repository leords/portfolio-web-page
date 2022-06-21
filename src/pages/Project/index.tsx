import React, { useContext, useEffect, useState } from "react";
import { BodyPortfolio } from "../../components/BodyPortfolioGit";
import { Header } from "../../components/HeaderPortfolioGit";
import { Loading } from "../../components/Loading";

import styles from './styles.module.scss';

export function Project() {

    const [loadingHeader, setLoadingHeader] = useState(false);
    const [loadingBody, setLoadingBody] = useState(false);

    return (
        <div className={styles['container']}>
            { loadingHeader && loadingBody ? (
                <Loading />
            ) : (
                <>
                <Header 
                    renderLoading={setLoadingHeader}
                />
                <BodyPortfolio 
                    renderLoading={setLoadingBody}
                />
                </>
            )}
        </div>
    )
}