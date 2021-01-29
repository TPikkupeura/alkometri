import './App.css';
import React, {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(60);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [bac, setBac] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let bac = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let remainingg = grams - (burning/time);
    if (gender === 'male') {
      bac = remainingg / (weight*0.7);
    } else {
      bac = remainingg / (weight*0.6);
    }
    setBac(bac)
  }


  return (
    <div className="container">
      <h3>Calculating blood alcohol level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight:</label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)} ></input>
        </div>
        <div>
          <label>Bottles:</label>
          <input name="bottles" type="number" step="1" value={bottles} onChange={e => setBottles(e.target.value)} ></input>
        </div>
        <div>
          <label>Time:</label>
          <input name="time" type="number" step="1" value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{bac.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
