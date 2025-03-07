import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questionnaire.css'; // Import the CSS file for styling

function Questionnaire() {
  const [responses, setResponses] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    question12: '',
    question13: '',
    question14: '',
    question15: '',
    question16: '',
    question17: '',
    question18: '',
    question19: '',
    question20: '',
    question21: '',
    question22: '',
    question23: '',
    question24: '',
    question25: '',
  });
  const [advisor, setAdvisor] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses({ ...responses, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Determine the advisor based on responses
    if (responses.question1 === 'A' && responses.question2 === 'A') {
      setAdvisor('Heather');
    } else if (responses.question1 === 'B' && responses.question2 === 'B') {
      setAdvisor('Nicole');
    } else {
      setAdvisor('Markele');
    }
    // Redirect to the payment page
    navigate('/payment');
  };

  return (
    <div className="questionnaire">
      <h2>Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>What is your primary relationship goal?</label>
          <select name="question1" value={responses.question1} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Long-term relationship</option>
            <option value="B">Casual dating</option>
            <option value="C">Friendship</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your preferred communication style?</label>
          <select name="question2" value={responses.question2} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Direct and straightforward</option>
            <option value="B">Playful and humorous</option>
            <option value="C">Thoughtful and reflective</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your ideal date activity?</label>
          <select name="question3" value={responses.question3} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Dinner and a movie</option>
            <option value="B">Outdoor adventure</option>
            <option value="C">Coffee and conversation</option>
          </select>
        </div>
        <div className="form-group">
          <label>How do you handle conflicts in a relationship?</label>
          <select name="question4" value={responses.question4} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Open communication</option>
            <option value="B">Avoidance</option>
            <option value="C">Compromise</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your love language?</label>
          <select name="question5" value={responses.question5} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Words of affirmation</option>
            <option value="B">Acts of service</option>
            <option value="C">Receiving gifts</option>
            <option value="D">Quality time</option>
            <option value="E">Physical touch</option>
          </select>
        </div>
        <div className="form-group">
          <label>What are your hobbies and interests?</label>
          <select name="question6" value={responses.question6} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Reading</option>
            <option value="B">Traveling</option>
            <option value="C">Sports</option>
            <option value="D">Cooking</option>
            <option value="E">Music</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your favorite type of music?</label>
          <select name="question7" value={responses.question7} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Pop</option>
            <option value="B">Rock</option>
            <option value="C">Classical</option>
            <option value="D">Jazz</option>
            <option value="E">Hip-hop</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your favorite type of cuisine?</label>
          <select name="question8" value={responses.question8} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Italian</option>
            <option value="B">Chinese</option>
            <option value="C">Mexican</option>
            <option value="D">Indian</option>
            <option value="E">American</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your favorite season?</label>
          <select name="question9" value={responses.question9} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Spring</option>
            <option value="B">Summer</option>
            <option value="C">Fall</option>
            <option value="D">Winter</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your favorite type of movie?</label>
          <select name="question10" value={responses.question10} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Action</option>
            <option value="B">Comedy</option>
            <option value="C">Drama</option>
            <option value="D">Horror</option>
            <option value="E">Romantic</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your favorite type of book?</label>
          <select name="question11" value={responses.question11} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Fiction</option>
            <option value="B">Non-fiction</option>
            <option value="C">Mystery</option>
            <option value="D">Fantasy</option>
            <option value="E">Biography</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your favorite type of pet?</label>
          <select name="question12" value={responses.question12} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Dog</option>
            <option value="B">Cat</option>
            <option value="C">Bird</option>
            <option value="D">Fish</option>
            <option value="E">Reptile</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your favorite type of vacation?</label>
          <select name="question13" value={responses.question13} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Beach</option>
            <option value="B">Mountain</option>
            <option value="C">City</option>
            <option value="D">Cruise</option>
            <option value="E">Adventure</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your favorite type of exercise?</label>
          <select name="question14" value={responses.question14} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Running</option>
            <option value="B">Yoga</option>
            <option value="C">Weightlifting</option>
            <option value="D">Cycling</option>
            <option value="E">Swimming</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your favorite type of weather?</label>
          <select name="question15" value={responses.question15} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Sunny</option>
            <option value="B">Rainy</option>
            <option value="C">Snowy</option>
            <option value="D">Cloudy</option>
            <option value="E">Windy</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your hair color?</label>
          <select name="question16" value={responses.question16} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Black</option>
            <option value="B">Brown</option>
            <option value="C">Blonde</option>
            <option value="D">Red</option>
            <option value="E">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your eye color?</label>
          <select name="question17" value={responses.question17} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Brown</option>
            <option value="B">Blue</option>
            <option value="C">Green</option>
            <option value="D">Hazel</option>
            <option value="E">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your body type?</label>
          <select name="question18" value={responses.question18} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Slim</option>
            <option value="B">Athletic</option>
            <option value="C">Average</option>
            <option value="D">Curvy</option>
            <option value="E">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your height?</label>
          <select name="question19" value={responses.question19} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Below 5'0"</option>
            <option value="B">5'0" - 5'5"</option>
            <option value="C">5'6" - 6'0"</option>
            <option value="D">Above 6'0"</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your ethnicity?</label>
          <select name="question20" value={responses.question20} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Asian</option>
            <option value="B">Black</option>
            <option value="C">Hispanic</option>
            <option value="D">White</option>
            <option value="E">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your education level?</label>
          <select name="question21" value={responses.question21} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">High School</option>
            <option value="B">Associate Degree</option>
            <option value="C">Bachelor's Degree</option>
            <option value="D">Master's Degree</option>
            <option value="E">Doctorate</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your occupation?</label>
          <select name="question22" value={responses.question22} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Student</option>
            <option value="B">Employed</option>
            <option value="C">Self-employed</option>
            <option value="D">Unemployed</option>
            <option value="E">Retired</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your income level?</label>
          <select name="question23" value={responses.question23} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Below $20,000</option>
            <option value="B">$20,000 - $50,000</option>
            <option value="C">$50,000 - $100,000</option>
            <option value="D">Above $100,000</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your marital status?</label>
          <select name="question24" value={responses.question24} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Single</option>
            <option value="B">Married</option>
            <option value="C">Divorced</option>
            <option value="D">Widowed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Do you have children?</label>
          <select name="question25" value={responses.question25} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="A">Yes</option>
            <option value="B">No</option>
          </select>
        </div>
        <button type="submit" className="default-btn reverse"><span>Submit</span></button>
      </form>
      {advisor && <p>Your advisor is: {advisor}</p>}
    </div>
  );
}

export default Questionnaire;