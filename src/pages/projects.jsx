import Project from "../components/project"
import Encriptador from "../assets/img/Encriptador.jpg"
import GestorVentas from "../assets/img/GestorVentas.jpg"
import GestorProyectos from "../assets/img/GestorProyectos.jpg"
import "../styles/projects.css"
import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import javascript from "../assets/icons/javascript.svg"
import react_icon from "../assets/icons/react.svg"
import node from "../assets/icons/node.svg"
import mongodb from "../assets/icons/mongodb.svg"
import graphql from "../assets/icons/graphql.svg"
import tailwind from "../assets/icons/tailwind.svg"

const Projects = () => {
    return(
        <main className="main_porjects">
            <div className="content">
                <Project 
                    title="Encriptador"
                    refer="https://javiergonzalezch.github.io/OracleOne_Encriptador/"
                    img={Encriptador}
                    descr="Es una aplicacion creada en el año 2022 con el fin de codificar o decodificar mensajes"
                    repo="https://github.com/JavierGonzalezCh/OracleOne_Encriptador"  
                />
                <h2 className="subtitle">Herramientas</h2>
                <ul className="list">
                    <li><img src={html} alt="javascript"/></li>
                    <li><img src={css} alt="javascript"/></li>
                    <li><img src={javascript} alt="javascript"/></li>
                </ul>
            </div>

            <div className="content">
            <Project
                title="Gestor de Ventas"
                refer="https://safe-reaches-63221.herokuapp.com/"
                img={GestorVentas}
                descr="Es una aplicacion creada en el año 2021. La funcion de esta es poder manejar las ventas que realiza un empresa y quien las realiza"
                repo="https://github.com/MisionTic-Ciclo-3-Dev-Team/SCRUM.git"
                api="https://github.com/MisionTic-Ciclo-3-Dev-Team/backen.git"
                />
            <h2 className="subtitle">Herramientas</h2>
            <ul className="list">
                <li><img src={react_icon} alt="javascript"/></li>
                <li><img src={node} alt="node"/></li>
                <li><img src={mongodb} alt="mongodb"/></li>
                <li><img src={tailwind} alt="tailwind"/></li>
            </ul>
            </div>

            <div className="content">
            <Project
                title="Team Mercury"
                refer="https://team-mercury-app.herokuapp.com"
                img={GestorProyectos}
                descr="Es una aplicacion creada en el año 2021. La funcion de esta aplicacion es poder llevar un registro de todos los proyectos que se llevan en curso en un ambiente universitario"
                repo="https://github.com/Team-Mercury-Misiontic/Front.git"
                api="https://github.com/Team-Mercury-Misiontic/backen.git"
                /> 
            <h2 className="subtitle">Herramientas</h2>
            <ul className="list">
                <li><img src={react_icon} alt="javascript"/></li>
                <li><img src={node} alt="node"/></li>
                <li><img src={graphql} alt="graphql"/></li>
                <li><img src={mongodb} alt="mongodb"/></li>
                <li><img src={tailwind} alt="tailwind"/></li>
            </ul>
            </div>
        </main>
    )
}

export default Projects