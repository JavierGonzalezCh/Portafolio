const Project = ({title,refer,img,descr,repo,api}) => {
    return(
        <>
            <h1 className="title">{title}</h1>
            <a  href={refer} target="_blank" rel="noreferrer">
                <img className="preview" src={img} alt="Vista Previa"/>
            </a>
            <p className="project_descr">{descr}</p>
            <a className="github" target="_blank" rel="noreferrer" href={repo}>Ver en Github</a>
            {api ? <a className="github" target="_blank" rel="noreferrer" href={api}>API en Github</a>:null}
        </>
    )
}
export default Project