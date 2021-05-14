import React, { Component } from "react";
import "./Server.css";
import history from "./history";
export default class Server extends Component {
  state = {
    loadin: true,
    list: [],
    search: "",
    server: [],
  };
  handleclick(li) {
    history.push(li);
  }

  async componentDidMount() {
    const url = "http://127.0.0.1:5000/Angilal";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ list: data.data, loadin: false });
  }
  clickme(li) {
    console.log(li.name);
  }
  render() {
    if (this.state.loadin) {
      return <div>loading</div>;
    }
    if (!this.state.list.length) {
      return <div>didn get menu list</div>;
    }
    return (
      <div>
        <form className="example" action="action_page.php">
          <div className="icon">
            <i className="fas fa-search">
              <a className="fa"></a>
            </i>
          </div>
          <input
            type="text"
            placeholder="Хайх"
            onChange={(event) => {
              this.setState({ search: event.target.value });
            }}
            className="search"
          />
        </form>
        <div className="row">
          {this.state.list
            .filter((li) => {
              if (this.state.search == " ") {
                return li;
              } else if (
                li.name.toLowerCase().includes(this.state.search.toLowerCase())
              ) {
                return li;
              }
            })
            .map((li) => (
              <div className="column">
                <div className="card">
                  <h3>{li.name}</h3>
                  <img className="zurag" src={li.Img} />
                  <button onClick={() => this.handleclick(li.url)}>
                    Дэлгэрэнгүй
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
