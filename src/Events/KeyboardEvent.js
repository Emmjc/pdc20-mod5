import React, {useState} from "react";

function KeyboardEvent(){
    const handleKeyDown = (event) => {
        if (event.key == "Enter"){
            alert ("Enter key pressed!");

        }
    };

    const handleKeyPress = (event) => {
        console.log (`Key Pressed: ${event.key}`);
    };

    return (
        <div>
            <input type="text"
            placeholder="Type Something"
            onKeyDown={handleKeyDown}
            onKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default KeyboardEvent;