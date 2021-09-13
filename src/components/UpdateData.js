// Importing React, but also importing the useState Hook
import React, {useState} from "react";
 
//declaring the functional component named UpdateData
// then setting the useState hook with two parameters, the search and setSearch
function UpdateData() {
    const[search, setSearch] = useState("");
    
// rendering the html
// On the div, where are write search keyword, we take the first parameter of search and render that in the HTML 
// To note on the input  field, we set the value of the input to Search, and then we add that to the input display to render it
// We use the onChange, that takes in the 2nd parameter of setSearch, and it triggered by the event that we set as the changing of the value. 
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