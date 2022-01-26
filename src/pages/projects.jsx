import Encriptador from "../assets/img/Encriptador.jpg"
import "../styles/projects.css"
import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import javascript from "../assets/icons/javascript.svg"

const Projects = () => {
    return(
        <main>
            <div className="content">
                <h1 className="title">Encriptador</h1>
                <a  href="https://javiergonzalezch.github.io/OracleOne_Encriptador/" target="_blank" rel="noreferrer">
                    <img className="preview" src={Encriptador} alt="Vista Previa"/>
                </a>
                <p className="project_descr">Es una aplicacion creada en el año 2022 con el fin de codificar o decodificar mensajes</p>
                <h2 className="subtitle">Herramientas</h2>
                <ul className="list">
                   <li><img src={html} alt="html"/></li>
                   <li><img src={css} alt="css"/></li>
                   <li><img src={javascript} alt="javascript"/></li>
                </ul>
                <a className="github" target="_blank" rel="noreferrer" href="https://github.com/JavierGonzalezCh/OracleOne_Encriptador">Ver en Github</a>
            </div>
            
        </main>
    )
}

export default Projects