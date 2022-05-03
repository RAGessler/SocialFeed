import { useState } from "react";
import "./LikeButton.css"

const LikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClick(){
        if(buttonClass === 'inactive'){
            setButtonClass('active')
        }
        else {
            setButtonClass('inactive');
        }

    }
    return (
        <div>
            <button className={buttonClass} onClick={handleClick}>Like</button>
        </div>
    )
}

export default LikeButton