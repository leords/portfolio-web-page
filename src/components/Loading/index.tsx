import { Spinner, SpinnerGap } from "phosphor-react";
import React from "react";

import styles from './styles.module.scss';

export function Loading() {
    return (
        <div className={styles['container']}>
            <div className={styles['div-logo']}>
                <div className={styles['logo']}>
                    <Spinner size={80} />
                </div>
            </div>
        </div>
    )
}