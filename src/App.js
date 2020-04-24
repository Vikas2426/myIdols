import React, { Component } from "react";
import "./App.css";
import idols from "./Assets/idols.json";
import { CardList } from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/searchbox/SearchBox.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idols: idols,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    let filteredIdols = this.state.idols.filter((idol) =>
      idol.name.toLowerCase().includes(this.state.searchField)
    );

    return (
      <div className="App">
        <h1>My Idols</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList idols={filteredIdols} />
      </div>
    );
  }
}

export default App;
