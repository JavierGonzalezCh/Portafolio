const ToolList = ({name,value}) =>{
    return(
        <>
        <li> 
            <label className="tool" htmlFor={name}>{name}</label> 
            <progress id={name} max="100" value={value}/>
        </li>
        </>
    )
}
export default ToolList