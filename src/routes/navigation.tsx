import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from "../context/ThemeContext";
import { TranslateProvider } from "../context/TranslateContext";
import { Home } from "../pages/Home";
import { Project } from "../pages/Project";


export function Navigation() {
    return(
        <BrowserRouter>
            <TranslateProvider>
                <ThemeProvider>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/portfolio" element={<Project/>}/>
                    </Routes>
                </ThemeProvider>
            </TranslateProvider>
        </BrowserRouter>
    );
}