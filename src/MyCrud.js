import React from 'react';
import {useState, useRef} from 'react';
import './MyCrud.css';


 function Crud(){
    const list = [
        {
            id : 1,
            name: "Hema",
            designation : "Teacher"
        },
        {
            id : 2,
            name: "Madhan",
            designation : "Professor"
        },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setupdateState] = useState(-1)
    return(
        
        <div className='crud'>

            <div>
            <div>
                <h1 style={{color:"red", padding:"10px", marginTop:"20px", textAlign:"center"}}>CRUD</h1>
            </div>

            <AddList setList={setList}/>

            <form onSubmit={handleSubmit}>

            <table>
                {
                    lists.map((current)=>(
                        updateState === current.id ? <EditList current = {current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.designation}</td>
                            <td>
                                <button className='edit' onClick={()=>handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={()=>handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>

    )
    function handleEdit(id){
        setupdateState(id)
    }

    function handleDelete(id){
        const newlist = lists.filter((li)=> li.id !== id)
        setList(newlist)
    }

    function handleSubmit(event){

        const name = event.target.elements.name.value
        const designation = event.target.elements.designation.value
        const newlist = lists.map((li)=> (
            li.id === updateState ? {...li, name:name, designaton: designation} : li
        ))

        setList(newlist)
        setupdateState(-1)
    }

 }

 function EditList({current, lists, setList}){
    function handleInputname(event){
        const value = event.target.value;
        const newlist = lists.map((li)=> (
            li.id === current.id ? {...li, name:value} : li
        ))

        setList(newlist)
    }
    function handleInputdesignation(event){
        const value = event.target.value;
        const newlist = lists.map((li)=> (
            li.id === current.id ? {...li, name:value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handleInputname} name='name' value={current.name}></input></td>
            <td><input type="text" onChange={handleInputdesignation} name='designation' value={current.designation}></input></td>
            <td><button type="submit">Update</button></td>
        </tr>
    )
 }

 function AddList({setList}){
    const nameRef = useRef();
    const designationRef = useRef();
    function handleSubmit(event){
        event.preventDefault();
        const name =event.target.elements.name.value;
        const designation =event.target.elements.designation.value;
        const newList = {
            id: 3,
            name,
            designation
        }
        setList((prevList)=> {
            return prevList.concat(newList)
        })
        nameRef.current.value = ""
        designationRef.current.value =""
    }

    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name = "name" placeholder='Enter name' ref={nameRef}></input>
            <input type="text" name = "designation" placeholder='Enter designation' ref={designationRef}></input>
            <button type="submit">Add</button>
        </form>
    )
 }

 export default Crud;