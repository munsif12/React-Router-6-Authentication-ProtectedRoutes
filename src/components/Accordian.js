import React, { useState } from 'react'

function Accordian({ val }) {
    const [show, setshow] = useState(false);
    const toggleDetail = () => {
        setshow(!show)
    }

    return (
        <div className="accordian" style={{ width: "30vw", marginTop: "5px" }}>
            <div className="accHeader" style={{ display: "flex" }}>
                <button onClick={() => toggleDetail()}>{show ? "-" : "+"}</button>
                <div className="accTitile" style={{ marginLeft: "2px" }}>{val.name}</div>
            </div>
            <div className="accContent" style={{ display: show ? "flex" : "none", background: "#e0e0e0e0", padding: "2px" }}>{val.age}</div>
        </div>
    )
}

export default Accordian