import { TranslateContext } from './../context/TranslateContext';
import React, { useContext } from "react";


export class Translation {
    //assinatura de índice!
    [x: string]: any;

    english = {
        menu : {
            home: 'Home',
            about: 'About me',
            skills: 'Skills',
            portfolio: 'Portfolio',
            contact: 'Contact',
        },

        facade: {
            name: "Hello, My Name's",
            profession: "I'm developer",
            descripition: "It makes no sense to look back and think: I should have done this or that, I should have been there. Does not matter. Let\'s invent tomorrow and stop worrying about the past.",
            author:'Steve Jobs',
            button: {
                buttonContact: 'Contact me',
                buttonCV: 'Download CV'
            }
        },

        about: {
            title: 'About Me.',
            subtitle: "It makes no sense to look back and think: I should have done this or that, I should have been there. Does not matter. Let's invent tomorrow and stop worrying about the past.",

            heart: {
                heartFirstItem: 'God',
                heartSecondItem: 'Family',
                heartThirdItem: 'Girlfriend',
                heartFourthItem: 'Friends',
            },
            game: {
                gameFirstItem: 'MMORPG',
                gameSecondItem: 'Running',
                gameThirdItem: 'Aventure',
            },
            music: {
                musicFirstItem: 'Rock',
                musicSecondItem: 'Countryside',
                musicThirdItem: 'Pop',
                musicFourthItem: 'Samba',
            }, 
            aventure: {
                aventureFirstItem: 'Fishing',
                aventureSecondItem: 'Camping',
                aventureThirdItem: 'Trail',
                aventureFourthItem: 'Travel',
            }
        },

        skill: {
            title: 'Skills.',
            subtitle: "I study to work in the development of web applications, I have been developing my study projects with technologies that I have knowledge of and seeking to learn new techs.",
            developing: 'developing',
            learning: 'learning'
        },

        portfolio: {
            title: 'Portfolio.',
            subtitle: "I study to work in the development of web applications, I have been developing my study projects with technologies that I have knowledge of and seeking to learn new techs.",
            link: 'Acess the complete portfolio',
        },

        contact: {
            title: 'Portfolio',
            subtitle: "Portfolio of projects posted on github, developed for study and practice. Using known resources in courses and free.",

            form: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                message: 'Message',
                button: 'Send message!',
            }
        },

        footer: {
            menu : {
                home: 'Home',
                about: 'About me',
                skills: 'Skills',
                portfolio: 'Portfolio',
                contact: 'Contact',
                cell: 'Cell'
            },
            copyright: 'Leonardo Rodrigues ©Copyright 2022. Developed by Leords.'
        }
    }


/*
Tradução para o portugues!
*/


    portuguese = {
        menu : {
            home: 'Inicio',
            about: 'Sobre mim',
            skills: 'Habilidade',
            portfolio: 'Portfólio',
            contact: 'Contato',
            switch: 'Modo'
        },

        facade: {
            name: "Olá, meu nome é ",
            profession: "Sou desenvolvedor",
            descripition: "Não faz sentido olhar para trás e pensar: devia ter feito isso ou aquilo, devia ter estado lá. Isso não importa. Vamos inventar o amanhã e parar de nos preocupar com o passado.",
            author:'Steve Jobs',
            button: {
                buttonContact: 'Entre contato',
                buttonCV: 'Baixar CV'
            }
        },

        about: {
            title: 'Sobre Mim.',
            subtitle: "Meu nome é Leonardo, tenho 27 anos, sou da cidade de Canoinhas — SC e sou formado em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Santa Catarina — IFSC. Sou admirador da tecnologia e busco através dos meus estudos entrar no mercado de trabalho de desenvolvimento.",

            heart: {
                heartFirstItem: 'Deus',
                heartSecondItem: 'Família',
                heartThirdItem: 'Namorada',
                heartFourthItem: 'Amigos',
            },
            game: {
                gameFirstItem: 'MMORPG',
                gameSecondItem: 'Corrida',
                gameThirdItem: 'Aventura',
            },
            music: {
                musicFirstItem: 'Rock',
                musicSecondItem: 'Sertanejo',
                musicThirdItem: 'Pop',
                musicFourthItem: 'Pagode'
            }, 
            aventure: {
                aventureFirstItem: 'Pescar',
                aventureSecondItem: 'Acamps',
                aventureThirdItem: 'Trilha',
                aventureFourthItem: 'Viagem',
            }
        },

        skill: {
            title: 'Habilidades.',
            subtitle: "Estudo para atuar no desenvolvimento de aplicações web, venho desenvolvendo meus projetos de estudos com tecnologias que tenho conhecimento e buscando aprender novas techs.",
            developing: 'Desenvolvimento',
            learning: 'Aprendendo'
        },

        portfolio: {
            title: 'Portfólio.',
            subtitle: "Portfólio de projetos postados no github, desenvolvidos para estudos e prática. Utilizando recursos conhecidos em cursos e gratuitos.",
            link: 'Acesse o portfólio completo',
        },

        contact: {
            title: 'Contato.',
            subtitle: 'Envie um email para mim, seja para me contratar rsrsrs ou apenas para dar um feedback do você viu nesse curto momento. Obrigado!',

            form: {
                name: 'Nome',
                email: 'Email',
                phone: 'Telefone',
                message: 'Mensagem',
                button: 'Enviar mensagem!',
            }
        },

        footer: {
            menu : {
                home: 'Inicio',
                about: 'Sobre mim',
                skills: 'Habilidade',
                portfolio: 'Portfólio',
                contact: 'Contato',
                cell: 'Celular'
            },
            copyright: 'Leonardo Rodrigues ©Copyright 2022. Desenvolvido por Leords'
        }

    }
}

