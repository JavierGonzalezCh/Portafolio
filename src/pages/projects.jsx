import Encriptador from "../assets/img/Encriptador.jpg"
import "../styles/projects.css"
import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import javascript from "../assets/icons/javascript.svg"

const Projects = () => {
    return(
        <main>
            <a className="content one" href="https://javiergonzalezch.github.io/OracleOne_Encriptador/" target="_blank" rel="noreferrer">
                <h1 className="title">Encriptador</h1>
                <img className="preview" src={Encriptador} alt="Vista Previa"/>
                <p className="project_descr">Encripta y desencripta mensajes</p>
                <h2 className="subtitle">Tecnologias Usadas</h2>
                <ul className="list">
                   <li><img src={html}/></li>
                   <li><img src={css}/></li>
                   <li><img src={javascript}/></li>
                </ul>
                <a className="" target="_blank" rel="noreferrer" href="https://github.com/JavierGonzalezCh/OracleOne_Encriptador">Ver Codigo</a>
            </a>
            <a className="content one" href="https://javiergonzalezch.github.io/OracleOne_Encriptador/" target="_blank" rel="noreferrer">
                <h1 className="title">Encriptador</h1>
                <img className="preview" src={Encriptador} alt="Vista Previa"/>
                <p className="project_descr">Encripta y desencripta mensajes</p>
                <h2 className="subtitle">Tecnologias Usadas</h2>
                <ul className="list">
                   <li><img src={html}/></li>
                   <li><img src={css}/></li>
                   <li><img src={javascript}/></li>
                </ul>
                <a className="" target="_blank" rel="noreferrer" href="https://github.com/JavierGonzalezCh/OracleOne_Encriptador">Ver Codigo</a>
            </a>
            <a className="content one" href="https://javiergonzalezch.github.io/OracleOne_Encriptador/" target="_blank" rel="noreferrer">
                <h1 className="title">Encriptador</h1>
                <img className="preview" src={Encriptador} alt="Vista Previa"/>
                <p className="project_descr">Encripta y desencripta mensajes</p>
                <h2 className="subtitle">Tecnologias Usadas</h2>
                <ul className="list">
                   <li><img src={html}/></li>
                   <li><img src={css}/></li>
                   <li><img src={javascript}/></li>
                </ul>
                <a className="" target="_blank" rel="noreferrer" href="https://github.com/JavierGonzalezCh/OracleOne_Encriptador">Ver Codigo</a>
            </a>
        </main>
    )
}

export default Projects