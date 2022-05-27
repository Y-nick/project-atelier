import React from 'react';
import QuestionList from './QuestionList.jsx';

const axios = require('axios');
// may need to run --env goal=local in dev to get .env local file
// Update params object to meet your needs

export default class MainQAComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: false,
    };
    this.fetcher = this.fetcher.bind(this);
  }

  componentDidMount() {
    this.fetcher();
  }

  fetcher() {
    const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products';
    const options = {
      url: apiURL,
      method: 'get',
      headers: { authorization: process.env.API_KEY },
      params: {
        page: 1,
        count: 8,
      },
    };
    axios(options).then((data) => {
      this.setState({ sample: data.data });
    }).catch((err) => {
      console.log('error fetching data', err);
    });
  }

  render() {
    const { sample } = this.state;
    return (
      <div className="PARENT">
        {sample ? <QuestionList item={sample[0]} /> : <div>LOADING...</div>}
      </div>
    );
  }
}
