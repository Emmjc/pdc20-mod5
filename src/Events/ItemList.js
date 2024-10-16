import React, {useState} from "react";
import './ItemList.css';


function ItemList(){
    const [items, setItems] = useState ([]);
    const [currentItem, setCurrentItem] = useState ({name: '', category: ''});
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCurrentItem({...currentItem, [name]: value});
    };

    const handleSubmit =(event) => {
        event.preventDefault();
        if(isEditing){
            const updatedItems = [...items];
            updatedItems[editingIndex] = currentItem;
            setItems(updatedItems);
            setIsEditing(false);
            setEditingIndex(null);
        } else{
            setItems([...items, currentItem]);
        }
        setCurrentItem({name: '', category: ''});
    };

    const handleDelete = (index) => {
        const filteredItems = items.filter ((_,i)=> i !== index);
        setItems(filteredItems);
    };

    const handleEdit = (index) => {
        setCurrentItem(items[index]);
        setIsEditing(true);
        setEditingIndex(index);
    }

    const handleItemClick = (event) => {
        event.stopPropagation();
        console.log('Item clicked: ', event.target.textContext)
    }

    return(
        <div className="item-list-app">
            <h2> Item List </h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                value={currentItem.name}
                placeholder="Item Name"
                onChange={handleChange}
                required/>

                <select
                name="category"
                value={currentItem.category}
                onChange={handleChange}
                required>
                    <option value=""> Select Category </option>
                    <option value="Work"> Work </option>
                    <option value="Personal"> Personal </option>
                </select>
                <button type="submit">{isEditing ? 'Update': 'Add'}</button>    
            </form>

            <ul>
                {items.map((item, index) =>(
                    <li key={index} onClick={handleItemClick}> 
                        {item.name} - {item.category}
                        <button onClick={(event)=>{
                            event.stopPropagation();
                            handleEdit(index);
                        }}> Edit</button>

                            <button onClick={(event)=>{
                            event.stopPropagation();
                            handleDelete(index);
                        }}> Delete </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ItemList;