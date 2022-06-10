import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Facade } from "../../components/Facade";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Portfolio } from "../../components/Portfolio";
import { Skill } from "../../components/Skill";

import styles from './styles.module.scss';

export function Home() {

    return(
        <div className={styles.container}>
            <div id="home">
                <Menu />
                <Facade />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="skills">
                <Skill />
            </div>
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}