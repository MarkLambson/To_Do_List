import React, { useState } from 'react';

const Input = (props) => {
    const { list, setList } = props;
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {name: input, isComplete: false,};
        setList([...list, task]);
        event.target.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='fw-bolder text-success'>What do you need to do?</h1>
            <br />
            <input name="task" type="text" value={input} onChange={(event) => {setInput(event.target.value);}} />
            <button className='btn btn-primary'>Add Task</button>
            <hr />
        </form>
    );
}

export default Input;