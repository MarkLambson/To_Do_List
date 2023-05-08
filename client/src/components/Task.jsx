import React from 'react';

const Task = (props) => {
    const { task, index, list, setList } = props;

    const onClick = () => {
        const newList = () => list.filter((task) => list.indexOf(task) !== index);
        // console.log(newList)
        setList(newList);
    };

    return (
        <div>
            <h3 className='fst-italic text-success'>I want to: <h2 className='fst-normal text-info' style={{ textDecorationLine: task.isComplete ? "line-through" : 'none' }}>{task.name}</h2></h3>
            <div>
                <label>Completed?</label>
                <input type="checkbox" onChange={(event) => {list[index].isComplete = !list[index].isComplete; setList([...list]);}}  checked={task.isComplete}></input>
                <br />
                <br />
                <button onClick={onClick} className='btn btn-outline-danger'> Delete? </button>
            </div>
            <hr />
        </div>
    );
}

export default Task;