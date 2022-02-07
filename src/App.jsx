import React, { useState } from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TodoList from './TodoList';

function App() {

    const [Items, setItems] = useState("");
    const [newItems, setNewItems] = useState([]);

    const inputEvents = (event) => {
        setItems(event.target.value);
    }

    const AddItem = () => {
        setNewItems((prevItems) => {
            return [...prevItems, Items]
        });
        setItems("");
    }

    const DeleteBtn = (id) => {
        setNewItems((prevItems) => {
            return prevItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>TODO LIST</h1>
                    <br />
                    <div className="input_div">
                        <input type="text" placeholder="Enter your items" onChange={inputEvents} value={Items} />
                        <Button className="btn_style" title="Add Item" onClick={AddItem}><AddIcon /></Button>
                    </div>
                    <br />
                    <br />
                    <div className="list_style" >
                        <ol>

                            {newItems.map((currVal, index) => {
                                return <TodoList
                                    text={currVal}
                                    key={index}
                                    id={index}
                                    onSelect={DeleteBtn} />
                            })
                            }

                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;