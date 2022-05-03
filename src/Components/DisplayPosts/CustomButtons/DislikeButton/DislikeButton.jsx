import { useState } from "react";
import "./DislikeButton.css"

const DislikeButton = (props) =>{

    const [buttonClass, setButtonClass] = useState('inactive');
    
    function handleClick(){
        if(buttonClass === 'inactive'){
            setButtonClass('dislike')
        }
        else{
            setButtonClass('inactive')
        }
    }
    return (
        <div>
            <button className={buttonClass} onClick={handleClick}>Dislike</button>
        </div>
    )
}

export default DislikeButton