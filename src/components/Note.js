import React, { useState } from "react";
function Note(props) {
    const [show, setshow] = useState(false);
    const [data, setdata] = useState();
    const newarr = props.newArr;
    let id = props.ids;
    const add = () => {
        setshow(false);
        const obj = { id: id++, note: data };
        newarr.push(obj);
        setdata(" ");
        props.render(true);
    };
    props.render(false);
    const writeNote = (e) => {
        setdata(e.target.value);
    };
    return (
        <>
            <div className="container">
                <div className="note">
                    <textarea
                        value={data}
                        style={{ height: show ? "100px" : "50px" }}
                        name="note"
                        id=""
                        cols="30"
                        rows="10"
                        onClick={() => setshow(true)}
                        placeholder="Write a note..."
                        onChange={(e) => writeNote(e)}
                    />
                    {show ? (
                        <button type="submit" className="add" onClick={() => add()}>
                            +
                        </button>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Note;
