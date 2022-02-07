import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './index.css'

function IncDec() {

    const [Increment, setIncrement] = useState(0);

    const incrementNumber = () => {
        setIncrement(Increment + 1);
    }
    const decrementNumber = () => {
      
        

        if(Increment!==0){
            
            setIncrement(Increment - 1);
        }
        else{
            alert("Can't go less than zero");
        }
    }

       
    return (
        <>

            <div className="main_div">
                <div className="center_div">
                    <h1>{Increment}</h1>
                    <div className="btn_div">
                        <div className="btnInner_div">
                            <Button className="Btn_two" title="Decrement" onClick={decrementNumber}><RemoveIcon /></Button>
                            <Button className="Btn_one" title="Increment" onClick={incrementNumber}><AddIcon /></Button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default IncDec;