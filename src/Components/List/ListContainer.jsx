import { useState } from "react";
import { ItemCard } from "./ItemCard/ItemCard";
import { ListBar } from "./ListBar/ListBar";
import style from './ListContainer.module.css';

export function ListContainer (){

    const [list, setList] = useState([]);

    function AddToList (itemName){
        for (let i=0; i < list.length; i++){
            if (list[i] === itemName){
                return alert('Item already on the list');
            }
        }
        let newList = [...list];
        newList.push( itemName );
        setList(newList);
    }

    function RemoveFromTheList (itemName){
        let newList = [...list];
        const index = newList.indexOf(itemName);
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <div>
            <ListBar returnValue={AddToList}/>
            <div className={style.listContainer}>
                {
                    list.length !== 0 ?
                    list.map((item, index) => {
                        return <ItemCard key={index} title={item} removeItem={RemoveFromTheList}/>
                    })
                    :
                    <p>emtpy list...</p>
                }
            </div>
        </div>
    );
}