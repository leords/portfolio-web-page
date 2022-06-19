import React from "react";

import pokedex from '../assets/image-project/pokedex.png';
import postIt from '../assets/image-project/post-it.png';
import webPage from '../assets/image-project/web-page.png'; 


export class Mydados {
    person = {
        name: 'Leonardo Rodrigues',
        email: 'leo_ro.drigues@hotmail.com',
        cell: '55+ 47 9 8412-6073',
        linkedin: 'https://www.linkedin.com/in/leonardo-rodrigues-2b14a8159',
        facebook: 'https://www.facebook.com/profile.php?id=100002584897261',
        instagram: 'https://www.instagram.com/leoroodriiguees/',
        whatsapp:'https://api.whatsapp.com/send?phone=5547984126073&text=Ol%C3%A1%20Leonardo%2C%20tudo%20bem%3F%20',
        download: 'https://drive.google.com/file/d/1KdF6ho640r5jBhlJsPrkScFEZAyREwVe/view?usp=sharing'
    }
}

export class MyPortfolio {

    project01 = {
        image: pokedex,
        descripition: 'Pokedex é um projeto de estudos, a idéia consiste em criar uma carteira de pokemons, utilizando a API Poke.',
        tech: 'ReactJS, TypeScript, Sass, Firebase.',
        link: 'https://github.com/leords/web-pokedex'
    }
    
    project02 = {
        image: postIt,
        descripition: 'Post-it é um projeto para estudos com a idéia de gerar uma forma de gerencias tarefas diárias com authenticação e CRUD de tarejas e projetos',
        tech: 'ReactJS, TypeScript, Tailwind, Prisma, Node',
        link: 'https://github.com/leords/my-post-it'
    }

    project03 = {
        image: webPage,
        descripition: 'Este projeto tem como objetivo desenvolver uma pagina de perfil profissional, onde é possivel à comunição com usuário e a demonstração de projetos.',
        tech: 'ReactJS, TypeScript, Sass, CSS, HTML',
        link: 'https://github.com/leords/practicing-web-page-profile'
    }

    project04 = {
        image: pokedex,
        descripition: 'Pokedex é um projeto de estudos, a idéia consiste em uma pokedex utilizando ferramentas disponiveis e de fácil acesso.',
        tech: 'H, TypeScript, Sass, Firebase',
        link: 'https://github.com/leords/web-pokedex'
    }

}