import React, { useState, useRef, useEffect } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import './Todo.css'; // Import the CSS file

function Todo() {
    const [input, setInput] = useState("");
    const [data, setdata] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })


    return (
        <div className="container">
            <div className="todo-box">
                <h2 className="todo-header">TODO</h2>
                <form className="todo-form">
                    <input
                        type='text'
                        placeholder='Enter todo'
                        className="todo-input"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                        ref={inputRef}
                    />
                    <button
                        type="button"
                        className="todo-button" onClick={() => {
                            if (input.length) {
                                setdata([...data, 
                                    {item:input,
                                        id:Date.now(),
                                        done:false
                                }])
                                setInput("")
                            }

                        }}
                    >
                        ADD
                    </button>
                </form>
                <ul className="todo-list">
                    {data.map((info, index) => {
                        return (
                            

                            <li className="todo-list-item" key={index} style={{ display: "flex", justifyContent: "space-between" }} >
                                {!info.done?<h3 style={{width:"100px"}}>{info.item}</h3>:<del style={{width:"100px"}}>{info.item}</del>}
                                <button style={{ border: "none", }} onClick={()=>{
                                    let dummy=data.filter((d,i)=>{
                                        return i!=index
                                    })
                                    setdata(dummy)
                                }}><MdDeleteForever />
                                </button>
                                <button style={{ border: "none" }} onClick={()=>{
                                    setInput(info.item)
                                    let dummy=data.filter((d,i)=>{
                                        return i!=index
                                    })
                                    setdata(dummy)
                                }}><MdEdit /></button>
                                <button style={{ border: "none" }} onClick={()=>{
                                    
                                    setdata(prvData=>prvData.map((task,ind)=>ind===index?{...task,done:true}:task))
                                    console.log(data)
                                }}><MdDoneOutline /></button>
                            </li>)
                    })}


                </ul>
            </div>
        </div>
    );
}

export default Todo;
