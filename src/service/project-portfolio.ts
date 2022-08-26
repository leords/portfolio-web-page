import React from "react";

import pokedex from '../assets/image-project/pokedex.png';
import postIt from '../assets/image-project/post-it.png';
import webPage from '../assets/image-project/web-page.png'; 
import portfolioDark from '../assets/image-project/portfolio-darkmode.png';
import portfolioLight from '../assets/image-project/portfolio-lightmode.png';


export class Mydados {
    person = {
        name: 'Leonardo Rodrigues',
        email: 'leo_ro.drigues@hotmail.com',
        cell: '55+ 47 9 8412-6073',
        linkedin: 'https://www.linkedin.com/in/leonardo-rodrigues-2b14a8159',
        facebook: 'https://www.facebook.com/profile.php?id=100002584897261',
        instagram: 'https://www.instagram.com/leoroodriiguees/',
        whatsapp:'https://api.whatsapp.com/send?phone=5547984126073&text=Ol%C3%A1%20Leonardo%2C%20tudo%20bem%3F%20',
        download: 'https://drive.google.com/file/d/1KdF6ho640r5jBhlJsPrkScFEZAyREwVe/view?usp=sharing',
        github: 'https://github.com/leords'
    }
}

export class MyPortfolio {
    [x: string]: any;

    english = {
        firstProject : {
            image: pokedex,
            descripition: 'Pokedex is a study project, the idea is to create a portfolio of pokemons, using the Poke API.',
            tech: 'ReactJS, TypeScript, Sass, Firebase.',
            link: 'https://github.com/leords/web-pokedex'
        },
        
        SecondProject: {
            image: postIt,
            descripition: 'Post-it is a project for studies with the idea of ​​generating a way to manage daily tasks with authentication and CRUD of tasks and projects.',
            tech: 'ReactJS, TypeScript, Tailwind, Prisma, Node',
            link: 'https://github.com/leords/my-post-it'
        },
    
        ThirdProject: {
            image: webPage,
            descripition: 'This project aims to develop a professional profile page, where it is possible to communicate with users and demonstrate projects.',
            tech: 'ReactJS, TypeScript, Sass, CSS, HTML',
            link: 'https://github.com/leords/practicing-web-page-profile'
        },
    
        FourthProject: {
            image: portfolioLight,
            descripition: 'Application developed to serve as a portfolio, demonstrating study projects and personal presentation.',
            tech: 'H, TypeScript, Sass, Firebase',
            link: 'https://github.com/leords/web-pokedex'
        }
    }

    portuguese = {
        firstProject : {
            image: pokedex,
            descripition: 'Pokedex is a study project, the idea is to create a portfolio of pokemons, using the Poke API.',
            tech: 'ReactJS, TypeScript, Sass, Firebase.',
            link: 'https://github.com/leords/web-pokedex'
        },
        
        SecondProject: {
            image: postIt,
            descripition: 'Post-it é um projeto para estudos com a idéia de gerar uma forma de gerencias tarefas diárias com authenticação e CRUD de tarejas e projetos',
            tech: 'ReactJS, TypeScript, Tailwind, Prisma, Node',
            link: 'https://github.com/leords/my-post-it'
        },
    
        ThirdProject: {
            image: webPage,
            descripition: 'Este projeto tem como objetivo desenvolver uma pagina de perfil profissional, onde é possivel à comunição com usuário e a demonstração de projetos.',
            tech: 'ReactJS, TypeScript, Sass, CSS, HTML',
            link: 'https://github.com/leords/practicing-web-page-profile'
        },
    
        FourthProject: {
            image: pokedex,
            descripition: 'Aplicação desenvolvida para servir como portfolio, demonstrando projetos de estudos e apresentação pessoal.',
            tech: 'H, TypeScript, Sass, Firebase',
            link: 'https://github.com/leords/web-pokedex'
        }

    }
}