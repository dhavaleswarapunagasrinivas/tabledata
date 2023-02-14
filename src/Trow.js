function Trow(props){
    let a=props.data
    return(
            <tr>
                <td>{a.name}</td>
                <td>{a.age}</td>
                <td>{a.id}</td>
                <td>{a.marks}</td>
            </tr>
    
    )
}
export default Trow;