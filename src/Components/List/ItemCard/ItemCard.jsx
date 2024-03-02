import style from './ItemCard.module.css';

export function ItemCard ({title, removeItem}){

    function ToRemove (){
        removeItem(title);
    }

    return (
        <div className={style.card}>
            <h3 className={style.title}>{title}</h3>
            <button className={style.button} onClick={ToRemove}>Remove</button>
        </div>
    );
}