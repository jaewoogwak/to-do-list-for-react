import React from "react";
import '../app.css';

const DoneBtn = () => {

    const doneToggle = (e) => {
        e.target.parentNode.firstChild.classList.toggle("done");
    }

    return (
        <button onClick={doneToggle}>Done</button>
    );
}

export default DoneBtn;