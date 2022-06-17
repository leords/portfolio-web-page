import { Translate } from "phosphor-react";
import React, { useContext } from "react";
import { TranslateContext } from "../../context/TranslateContext";

import styles from './styles.module.scss';

import portuguese from '../../assets/icones/brasil.png';
import english from '../../assets/icones/eua.png';

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
                <option className="" value="english">
                    <p>EN-US</p>
                    <img src={english} alt="" />
                </option>
                <option className="" value="portugueses">
                    <img src={portuguese} alt="" />
                    <p>PT-BR</p>
                </option>
            </select>
        </div>
    )
}