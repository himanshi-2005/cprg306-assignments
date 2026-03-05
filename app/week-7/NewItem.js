"use client";
import {useState} from "react";

export default function NewItem(onAddItem){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("produce");
    const [items, setItems] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        const item={
            id: crypto.randomUUID(),
            name: name,
            quantity: quantity,
            category: category
        }
       
        onAddItem(item);
        setName("");
        setQuantity("1");
        setCategory("produce");
        setItems("");
    }
    return(
        <form onSubmit={handleSubmit} className="dark:border-white text-black text-center text-bold text-lg border-black mx-auto p-10 border-3 rounded-md bg-blue-300">
         
            <label className="flex flex-row gap-2">
              Name:
              <input id="name" type="text" name="Name:"value={name} onChange={(e) => setName(e.target.value)} required = {true} className="bg-blue-50 border-2 border-black p-0.5 w-full rounded-md text-black" />

            </label>   

           
            <div className="flex flex-row gap-2 mt-7">
                Quantity:
                <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(e.target.value)}  className="bg-blue-50 border-2 border-black p-0.5 w-full rounded-md text-black" />
                
                <div>Category:</div> 
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-blue-50 border-2 border-black p-0.5 w-full rounded-md text-black">
                  
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozenFoods">Frozen Foods</option>
                    <option value="cannedGoods">Canned Goods</option>
                    <option value="dryGoods">Dry goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                 </select>
            </div>
           
            <button type="submit" className=" text-bold text-2xl mx-80 px-5 p-2 rounded-md border-2 border-black bg-blue-500 text-white mt-8 hover:bg-blue-950">
                +
            </button>
        </form>
    )
}