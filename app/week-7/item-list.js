import {useState} from "react";
import Item from './item';

export default function ItemList({items}){
   

    const [sortBy, setSortBy] = useState("name");
    const sortedItems= [...items].sort((a,b) => {
        return a[sortBy].localeCompare(b[sortBy]);
    });
        return(
            <div>
                <div className="flex gap-3 mt-6 mb-6 justify-center">
                    <button onClick={() => setSortBy("name")} 
                     className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
                                   ${sortBy === "name" 
                                   ? "bg-gray-800 text-white" 
                                   : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
                             }`}>
                         Sort by Name
                    </button>
                    <button onClick={() => setSortBy("category")} 
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
                                   ${sortBy === "category" 
                                   ? "bg-gray-800 text-white" 
                                   : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
                             }`}>
                        Sort by Category
                     </button>                
                </div>
                <ul className=" dark:text-black mx-30 my-10 border p-3 rounded-md bg-blue-200">
                    {sortedItems.map((item) => (
                        <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                       />
                 ))}
                </ul>
           </div>
    );
    
}