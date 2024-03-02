import { useState } from "react";
import style from './ListBar.module.css';

export function ListBar ({returnValue}){

    const [name, setName] = useState('');

    function ReturnTitle (){
        if (name === '' || name.length < 3){
            return alert('invalid typed value');
        }
        returnValue(name);
        setName('');
    }

    return (
        <div className={style.ListBar}>
            <input type="text" placeholder="add a item..." value={name} onChange={e => {setName(e.target.value)}}/>
            <button onClick={()=>{ReturnTitle()}}>Add</button>
        </div>
    );
}