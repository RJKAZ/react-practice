import React, {useState} from "react";
 

function UpdateData() {
    const[search, setSearch] = useState("");

    return (
        <div className="App">
            <h2>Update Data from an Input</h2>

            <div className="input-display">
                Searched Keyword: <b>{search}</b>
            </div>

            <div className="inputs">
                <input
                    className="input"
                    type="text"
                    value={search}
                    placeholder="Search Here"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

        </div>
    )
}

export default UpdateData;