import React, {useState} from "react";

function EventonClick(){
    //For Target------------------------------------
    const[inputValue, setInputValue] = useState ('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    }
    //----------------------------------------------

    //For Type -------------------------------------
    const handleEvent = (event) => {
        event.stopPropagation(); //Stop the event propagating further
        console.log (`Event type: ${event.type}`);
        handleClick();

    }
    //----------------------------------------------

    //preventDefault--------------------------------
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log ("Form submission prevented")
        //You can add additional form handling
    };
    //----------------------------------------------
    const handleClick = () => {
        alert ("Button Clicked");
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" onChange={handleChange}/>
                <button onClick= {handleEvent}> Click Me!</button>
                <button type="submit"> Submit </button>
            </div>
        </form> 
    );
}
export default EventonClick;