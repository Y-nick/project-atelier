import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.passSearchInput = this.passSearchInput.bind(this);
  }

  componentDidMount() {
  }

  passSearchInput() {
    const { searchInput } = this.state;
    const { search } = this.props;
    search(searchInput);
  }



  render() {
    const { questions } = this.props;
    const { searchInput } = this.state;
    console.log(questions);
    return (
      <div className="flex-container searchDiv">
        <div>
          <input
            className="inputs"
            type="text"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            onChange={(e) => { this.setState({ searchInput: e.target.value }); }}
          />
          {
          }
          <div className="icon">
            Icon
            {/* Icon will go here */}
          </div>
        </div>
        <div className="questionData">
          {}
        </div>
      </div>
    );
  }
}
