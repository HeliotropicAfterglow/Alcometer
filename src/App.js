import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(89);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alcLevel, setAlcLevel] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
      //result = (((bottles * 0.33) * 8 * 4.5) - ((weight / 10) * time)) / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    setAlcLevel(result);
  }

  return (
    <div style={{marginTop: 30}}>
      <form onSubmit={handleSubmit}>
        <h3>Calculating alcohol blood level</h3>
        <div>
          <label>Weight</label>
          <input type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" step="1" value={bottles} onChange={e => setBottles(e.target.value)}/>
        </div>
        <div>
          <label>Time</label>
          <input type="number" step="1" value={time} onChange={e => setTime(e.target.value)}/>
        </div>
        <div>
          <label>Gender</label>
          <div>
            <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
            <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
          </div>          
        </div>
        <div>          
          <output style={{marginLeft: '5px'}}>{alcLevel.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
