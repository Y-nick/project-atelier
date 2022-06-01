import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';

const axios = require('axios');

const MainQAComponent = ({ curProduct }) => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = (page = 1, count = 11) => {
    const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions';
    const options = {
      url: apiURL,
      method: 'get',
      headers: { authorization: process.env.API_KEY },
      params: {
        product_id: curProduct.id,
        page,
        count,
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
