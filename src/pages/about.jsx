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
            Soy una persona organizada y proactiva, me gusta los desafíos más difíciles y participar en nuevos proyectos, además de aportar todos los conocimientos que he adquirido en mi formación académica. Tengo capacidad para trabajar en equipo e impulsar valores que marquen a las personas como el del compañerismo y la amistad.
            </p>
            <p>
                Me considero una persona con gran capacidad de aprendizaje, la cual es capaz de poner en práctica las distintas técnicas aprendidas según sean requeridas, además me desenvuelvo de manera eficaz en situaciones de estrés y presión.
            </p>
            <p>
                Dispuesto a cumplir con las distintas funciones, obligaciones y normas laborales que tengan establecidas, me presento con gran entusiasmo a su empresa para formar parte del cumplimiento de metas planteadas en su misión.
            </p>
        <h2>Herramientas</h2>
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
                <ToolList name="Node Js" value="40"/>
                <ToolList name="Git" value="80"/>
            </ul>
        <h2>Metodologias</h2>
            <ul className="about_list">
                <li>Scrum</li>
                <li>Kanban</li>
                <li>Cascada</li>
            </ul>
        </div>
    </main>
    )
}

export default About