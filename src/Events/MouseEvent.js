import React, {useState} from "react";

function MouseEvent(){
    const handleMouseEnter = ()=> {
        console.log ("Mouse enterd the button!")
    };
    const handDoubleClick = ()=> {
        alert ("Button double clicked!")
    }
    return(
        <div>
            <button onMouseEnter={handleMouseEnter}
                    onDoubleClick={handDoubleClick}>
                Hover or Click
            </button>
        </div>
    );
}

export default MouseEvent;