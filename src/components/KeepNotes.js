import React, { useState } from 'react'
import Note from './Note'
function KeepNotes() {

    const [setrender] = useState(true)
    const [newNotes, setnewNotes] = useState([{ id: 1, note: "1" }, { id: 1, note: "2" }])

    let sort = (b) => {

        const sortedArray = b.map((v, i) => {
            return { ...v, id: i }
        })
        return sortedArray
    }
    const del = (i) => {
        const b = newNotes.filter((val, ind) => {
            return ind !== i

        })
        setnewNotes(b)
    }
    return (
        <div className="main">

            <Note render={setrender} newArr={newNotes} ids={newNotes.length} />
            <div className="notespocket">
                {newNotes.map((val, ind) => {
                    return (
                        <div className="note" key={ind} style={{ width: "30%", height: "20vh", border: "1px solid black", position: "relative" }}>
                            <p>{val.note}</p>
                            {/* <textarea name="txtarea" id="txtarea" cols="30" rows="10">{val.note}</textarea> */}
                            <button type="submit" className="add" onClick={() => del(ind)}  >
                                x
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default KeepNotes