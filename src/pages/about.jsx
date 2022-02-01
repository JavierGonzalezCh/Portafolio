import ToolList from "../components/toolList"
import Foto from "../assets/img/Foto.jpg"
import "../styles/about.css"

const About = () => {
    return(
    <main>
        <h1 className="name">Javier Gonzalez Chima</h1>
        <img className="fotoPerfil" id="fotoPerfil" src={Foto} alt="foto de perfil" />
        <div className="personal_descr">
            <p>
            Hola, Soy Javier Gonzalez. Soy de la ciudad de bogota y estoy entrando en el mundo del desarrollo web.
            </p>
            <p>
            Soy una persona con gran capacidad de aprendizaje, disciplinada y con vision clara de la vida, como muestra de ello, la mayoria de mi conocimiento lo he adquirido con cursos virtuales o de manera autodidacta
            </p>
            <p>
            Mis fortalezas recaen en mi gran capacidad para trabajar en equipo, la facilidad que tengo para adquirir nuevo conocimiento y la motivacion que me genera vincularme en el desarrollo de proyectos desafiantes
            </p>
        <h2 className="subtitle">Herramientas</h2>
            <ul className="about_list">
                <ToolList name="Html" value="75"/>
                <ToolList name="Css" value="75"/>
                <ToolList name="Javascript" value="60"/>
                <ToolList name="Python" value="70"/>
                <ToolList name="Php" value="30"/>
                <ToolList name="Java" value="70"/>
                <ToolList name="Bootstrap" value="70"/>
                <ToolList name="Tailwind" value="70"/>
                <ToolList name="React" value="80"/>
                <ToolList name="Vue" value="30"/>
                <ToolList name="Node Js" value="40"/>
                <ToolList name="Git" value="80"/>
                
            </ul>
        </div>
    </main>
    )
}

export default About