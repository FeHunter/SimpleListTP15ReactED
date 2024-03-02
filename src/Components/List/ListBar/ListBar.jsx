import { useState } from "react";
import style from './ListBar.module.css';

export function ListBar (){

    const [name, setName] = useState('');

    return (
        <div className={style.ListBar}>
            <input type="text" placeholder="add a item..." value={name} onChange={e => {setName(e.target.value)}}/>
            <button>Add</button>
        </div>
    );
}