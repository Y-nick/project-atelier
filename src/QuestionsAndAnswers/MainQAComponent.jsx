import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';

const axios = require('axios');
// may need to run --env goal=local in dev to get .env local file
// Update params object to meet your needs

const MainQAComponent = ({ curProduct }) => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = () => {
    const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions';
    const options = {
      url: apiURL,
      method: 'get',
      headers: { authorization: process.env.API_KEY },
      params: {
        product_id: curProduct.id,
        page: 1,
        count: 11,
      },
    };
    axios(options).then((data) => {
      setQuestions(data.data.results);
    }).catch((err) => {
      console.log('error fetching data', err);
    });
  };

  useEffect(() => {
    if (curProduct.id) {
      fetchQuestions();
    }
  }, [curProduct.id]);

  return (
    <div className="PARENT">
      <QuestionList curProduct={curProduct} questions={questions} fetcher={fetchQuestions} />
    </div>
  );
};

export default MainQAComponent;
