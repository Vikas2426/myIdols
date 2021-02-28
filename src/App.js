import React, { Component } from "react";
import "./App.css";
import idols from "./Assets/idols.json";
import { CardList } from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/searchbox/SearchBox.component.jsx";
import ErrorBoundary from "./components/errorboundary/ErrorBoundary.component.jsx";

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
    // let filteredIdols = this.state.idols.filter((idol) =>
    //   idol.name.toLowerCase().includes(this.state.searchField)
    // );

    return (
      <div className="App">
        <p>My Idols</p>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundary>
          <CardList
            idols={this.state.idols.filter((idol) =>
              idol.name.toLowerCase().includes(this.state.searchField)
            )}
          />
        </ErrorBoundary>

      </div>
    );
  }
}

export default App;
