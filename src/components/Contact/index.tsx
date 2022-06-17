import { EnvelopeOpen } from "phosphor-react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from './styles.module.scss';

import formsubmitLogo from '../../assets/icones/formSubmit.png';
import { TranslateContext } from "../../context/TranslateContext";
import { Translation } from "../../service/translation";

export function Contact() {

    const {theme, setTheme} = useContext(ThemeContext);
    const {translate, setTranslate} = useContext(TranslateContext);

    const language = new Translation();

    return (
        <div className={styles['container-' + theme]}>
            <div className={styles['container-div-' + theme]}>
                <div className={styles['div-contact-title-' + theme]}>
                    <EnvelopeOpen 
                        size={74}
                        color={'#5D66D7'}
                    />
                    <h2 className={styles['title']}>{language[translate].contact.title}</h2>
                    <p className={styles['subtitle-' + theme]}>{language[translate].contact.subtitle}</p>
                </div>
                <div className={styles['div-form']}>
                    <form action="">
                        <p className={styles['label-' + theme]}>{language[translate].contact.form.name}</p>
                        <input 
                            type="text"
                            className={styles['input-' + theme]}
                        />
                        <p className={styles['label-' + theme]}>{language[translate].contact.form.email}</p>
                        <input 
                            type="email" 
                            className={styles['input-' + theme]}
                        />
                        <p className={styles['label-' + theme]}>{language[translate].contact.form.phone}</p>
                        <input 
                            type="text" 
                            className={styles['input-' + theme]}
                        />
                        <p className={styles['label-' + theme]}>{language[translate].contact.form.message}</p>
                        <input 
                            type="text" 
                            className={styles['input-' + theme]}
                        />
                    </form>
                    <button 
                        type="submit"
                        className={styles['button-submit']}
                    >
                            {language[translate].contact.form.button}
                    </button>
                    <img src={formsubmitLogo} alt="" />
                </div>
            </div>
        </div>
    )
}