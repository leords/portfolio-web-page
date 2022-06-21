import React, { useContext, useEffect, useState } from "react";
import { BodyPortfolio } from "../../components/BodyPortfolioGit";
import { Header } from "../../components/HeaderPortfolioGit";
import { Loading } from "../../components/Loading";

import styles from './styles.module.scss';

export function Project() {

    const [loading, setLoading] = useState(false);

    return (
        <div className={styles['container']}>
            { loading ? (
                <Loading />
            ) : (
                <>
                <Header 
                    renderLoading={setLoading}
                />
                <BodyPortfolio 
                    renderLoading={setLoading}
                />
                </>
            )}
        </div>
    )
}