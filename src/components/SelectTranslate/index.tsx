import { Translate } from "phosphor-react";
import React, { useContext } from "react";
import { TranslateContext } from "../../context/TranslateContext";

import styles from './styles.module.scss';

export function Select() {

    const {translate, setTranslate} = useContext(TranslateContext);

    return (
        <div className={styles['container']}>
            <select 
                name="status" 
                className=""
                value={translate}
                onChange={(e) => setTranslate(e.target.value)}
            >
                <option className="" value="open">English</option>
                <option className="" value="closed">Portuguese</option>
            </select>
        </div>
    )
}