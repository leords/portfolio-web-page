import { ChartBarHorizontal } from "phosphor-react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from './styles.module.scss';

import person from '../../assets/person/person02.png';

import react from '../../assets/icones/atom.png';
import css from '../../assets/icones/css.png';
import html from '../../assets/icones/html.png';
import javascript from '../../assets/icones/js.png';
import nodeJs from '../../assets/icones/node-js.png';
import prismaOrm from '../../assets/icones/prisma-orm.png';
import sass from '../../assets/icones/sass.png';
import tailwindCss from '../../assets/icones/tailwind-css.png';
import typescript from '../../assets/icones/typescript.png';
import { TranslateContext } from "../../context/TranslateContext";
import { Translation } from "../../service/translation";

export function Skill() {

    const {theme, setTheme} = useContext(ThemeContext);
    const {translate, setTranslate} = useContext(TranslateContext);

    const language = new Translation();

    return (
        <div className={styles['container-' + theme]}>
            <div className={styles['container-div-' + theme]}>
                <div className={styles['div-skill-title-' + theme]}>
                    <ChartBarHorizontal 
                        size={74}
                        color={'#5D66D7'}
                    />
                    <h2 className={styles['title-' + theme]}>{language[translate].skill.title}</h2>
                    <p className={styles['subtitle-' + theme]}>{language[translate].skill.subtitle}</p>
                </div>
                <div className={styles['div-skill-person']}>
                    <div className={styles['div-skill-person-img']}>
                        <div className={styles['div-image']}>
                            <img src={person} alt="Foto da pessoal responsavel pela pagina" />
                        </div>
                        <div className={styles['slipse-' + theme]}>

                        </div>
                    </div>
                    <div className={styles['div-skill-person-logo']}>
                        <div className={styles['div-text-' + theme]}>
                            <h2 className={styles['tech-title']}>{language[translate].skill.developing}</h2>
                        </div>
                        <div className={styles['first-div-logo']}>
                            <img className={styles.icone} src={css} alt="CSS" />
                            <img className={styles.icone} src={html} alt="HTML" />
                            <img className={styles.icone} src={react} alt="REACT" />
                            <img className={styles.icone} src={javascript} alt="JAVASCRITP" />
                            <img className={styles.icone} src={typescript} alt="TYPESCRIPT" />
                        </div>
                        <div>
                            <h2 className={styles['tech-title']}>{language[translate].skill.learning}</h2>
                        </div>
                        <div className={styles['second-div-logo']}>
                            <img className={styles.icone} src={nodeJs} alt="NODE JS" />
                            <img className={styles.icone} src={prismaOrm} alt="PRISMA" />
                            <img className={styles.icone} src={typescript} alt="TYPESCRIPT" />
                            <img className={styles.icone} src={sass} alt="SASS" />
                            <img className={styles.icone} src={tailwindCss} alt="TAILWIND" />
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
}