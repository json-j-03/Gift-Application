import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./assets/css/UserFeed.css";

// Custom hook for fetching feedback data
function useFeedbackData() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        // Your API endpoint URL for the GET operation
        const API_URL = 'http://localhost:9015/api/v1/feed/get'; // Replace with your API endpoint

        // Make the GET request using Axios
        const response = await axios.get(API_URL);

        // Assuming the API returns an array of feedback data, you can set it to the state
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
        // Handle the error accordingly (e.g., display an error message)
      }
    };

    fetchFeedbackData();
  }, []);

  return feedbackData;
}

const UserFeed = () => {
  // Use the custom hook to fetch feedback data
  const feedbackData = useFeedbackData();

  return (
    <div className="user-feed-container">
      <table className="user-feed-table">
        <thead className="user-feed-thead">
          <tr>
            <th className="user-feed-th">Name</th>
            <th className="user-feed-th">Email</th>
            <th className="user-feed-th">Contact</th>
            <th className="user-feed-th">Comment</th>
          </tr>
        </thead>
        <tbody className="user-feed-tbody">
          {feedbackData.map((feedback) => (
            <tr key={feedback.id}>
              
              <td className="user-feed-td">{feedback.name}</td>
              <td className="user-feed-td">{feedback.email}</td>
              <td className="user-feed-td">{feedback.contact}</td>
              <td className="user-feed-td">{feedback.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserFeed;