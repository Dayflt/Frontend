import './App.css';
import star from './img/star110.png';

function P_Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <h3>
          Home 페이지 입니당!
        </h3>
      </header>
    </div>
  );
}
export default App;