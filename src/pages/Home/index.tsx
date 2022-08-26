import { About } from "../../components/About";
import { ButtonFloating } from "../../components/ButtonFloating";
import { Contact } from "../../components/Contact";
import { Facade } from "../../components/Facade";
import { FeedInsta } from "../../components/FeedInstagram";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Portfolio } from "../../components/Portfolio";
import { Skill } from "../../components/Skill";

import styles from './styles.module.scss';

export function Home() {

    return(
        <div className={styles.container}>
            <div className={styles.floatingButton}>
                <ButtonFloating />
            </div>
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
            <div id="instagram">
                <FeedInsta />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}