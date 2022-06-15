import { EnvelopeOpen } from "phosphor-react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from './styles.module.scss';

import formsubmitLogo from '../../assets/icones/formSubmit.png';

export function Contact() {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className={styles['container-' + theme]}>
            <div className={styles['container-div-' + theme]}>
                <div className={styles['div-contact-title-' + theme]}>
                    <EnvelopeOpen 
                        size={74}
                        color={'#5D66D7'}
                    />
                    <h2 className={styles['title']}>Contact.</h2>
                    <p className={styles['subtitle-' + theme]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={styles['div-form']}>
                    <form action="">
                        <p className={styles['label-' + theme]}>Name</p>
                        <input 
                            type="text"
                            className={styles['input-' + theme]}
                        />
                        <p className={styles['label-' + theme]}>Email</p>
                        <input 
                            type="email" 
                            className={styles['input-' + theme]}
                        />
                        <p className={styles['label-' + theme]}>Phone</p>
                        <input 
                            type="text" 
                            className={styles['input-' + theme]}
                        />
                        <p className={styles['label-' + theme]}>Message</p>
                        <input 
                            type="text" 
                            className={styles['input-' + theme]}
                        />
                    </form>
                    <button 
                        type="submit"
                        className={styles['button-submit']}
                    >
                            Send message!
                    </button>
                    <img src={formsubmitLogo} alt="" />
                </div>
            </div>
        </div>
    )
}