import './App.css';
import {useState} from 'react';

function App() {

  const [weight, setWeight] = useState(0);
  const [intensity, setIntensity] = useState(1);
  const [gender, setGender] = useState('male');
  const [calories, setCalories] = useState(0);


  function calculate(e) {
    let result = 0;
    e.preventDefault();

    if (gender === "male") {
      result = (879 + 10.2 * weight) * intensity;
    } else {
      result = (795 + 7.18 * weight) * intensity;
    }

    setCalories(result)
  }

  return (
    <div>
      <form onSubmit={calculate}>
      <div>
        <label>Weight</label>
        <input type="number" step="1" value = {weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
      <label>Intensity</label>
      <select value = {intensity} onChange={e => setIntensity(e.target.value)}>
        <option value="1.3">Light</option>
        <option value="1.5">Usual</option>
        <option value="1.7">Moderate</option>
        <option value="2">Hard</option>
        <option value="2.2">Very hard</option>
      </select>
      </div>
      <div>
      <label>Gender</label>
      <label><input type="radio" name="gender" value="male" defaultChecked onChange ={e =>setGender(e.target.value)}/>Male</label>
      <label><input type="radio" name="gender" value="female" onChange ={e =>setGender(e.target.value)}/>Female</label>
      </div>
      <div>
      <label>Calorie consumption: </label>
      <output>{calories.toFixed(0)}</output>
      </div>
      <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
