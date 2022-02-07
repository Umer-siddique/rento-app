import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


function TodoList(props) {

    return (
        <>
            <li>
                <span title="Delete Item">
                    < DeleteIcon className="dltBtn" onClick={()=>{
                        props.onSelect(props.id);
                    }} ></DeleteIcon>
                </span>
                {props.text}
            </li>
        </>
    )

}
export default TodoList;