import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicParticipation = () => {
  const [feedback, setFeedback] = useState('');
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios.get('/api/public-participation/')
      .then(response => {
        setSubmissions(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the feedback!', error);
      });
  }, []);

  const handleSubmit = () => {
    axios.post('/api/public-participation/', { feedback })
      .then(response => {
        setSubmissions([...submissions, response.data]);
        setFeedback('');
      })
      .catch(error => {
        console.error('There was an error submitting the feedback!', error);
      });
  };

  return (
    <div>
      <h2>Public Participation</h2>
      <textarea value={feedback} onChange={e => setFeedback(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {submissions.map(submission => (
          <li key={submission.id}>{submission.feedback}</li>
        ))}
      </ul>
    </div>
  );
};

export default PublicParticipation;
