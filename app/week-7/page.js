'use client';
import NewItem from './NewItem.js';
import ItemList from './item-list.js';
import itemsData from './items.json';
import {useState} from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem){
        setItems([...items, newItem]);
        
    }

    return(
        <>
            <NewItem onAddItem= {handleAddItem}/>
            <ItemList items={items}/>

        </>
    );
    
}