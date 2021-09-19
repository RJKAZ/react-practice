import React from "react";

const userData = [
    {
      id: "100",
      name: "Chanda Mittal"
    },
    {
      id: "101",
      name: "Sumati Pau"
    },
    {
      id: "103",
      name: "Lal Sahota"
    },
    {
      id: "104",
      name: "Vasundhara Bala"
    },
    {
      id: "105",
      name: "Rakesh Andra"
    }
  ];
  export default class DeleteItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: userData
      };
    }
  
    onDeleteByIndex(index) {
      this.setState({
        users: this.state.users.filter((item, i) => i !== index)
      });
    }
  
    render() {
      return (
        <div>
          <h2>
            Delete an item from state array
            <hr />
          </h2>
          <ul>
            {this.state.users.map((item, index) => (
              <li key={item.id}>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => this.onDeleteByIndex(index)}
                />
                &nbsp; <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }