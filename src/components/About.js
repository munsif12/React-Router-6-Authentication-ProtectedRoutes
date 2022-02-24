import React, { useState } from 'react'
import Accordian from './Accordian';

let arr = [{ name: "Heading 1", age: 'Dummy Accordian Description 1' }, { name: 'Heading 2', age: 'Dummy Accordian Description 2' }, { name: 'Heading 3', age: 'Dummy Accordian Description 3' }]
function About() {
    const [Data] = useState(arr);
    const [Hide, setHide] = useState([]);
    function toggleDetail(i) {
        if (Hide.includes(i)) {
            setHide(Hide.filter(item => item !== i))
        }
        else {
            setHide([...Hide, i])
        }
    }
    return (
        <div>
            <h1>Custom Accordian</h1>

            <h1>First Solution</h1>
            <div className="accordian-sol-1" style={{ margin: "0 auto", width: "80%" }}>
                {
                    Data.map((i, v) => {
                        return (
                            <div key={`${i}+${v}`} className="accordian" style={{ width: "30vw", marginTop: "5px" }} >
                                <div className="accHeader" style={{ display: "flex" }}>
                                    <button onClick={() => toggleDetail(v)}>{Hide.includes(v) ? "-" : "+"}</button>
                                    <div className="accTitile" style={{ marginLeft: "2px" }}>{i.name}</div>
                                </div>
                                <div className="accContent" style={{ display: Hide.includes(v) ? "flex" : "none", background: "#e0e0e0e0", padding: "2px" }}>{i.age}</div>
                            </div>
                        )
                    })
                }
            </div>

            <h1>Second Solution</h1>
            <div className="accordian-sol-2" style={{ margin: "0 auto", width: "80%" }}>
                {
                    Data.map((i, v) => {
                        return (
                            <Accordian key={v} val={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About