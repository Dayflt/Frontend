import './App.css';
import star from './img/star110.png';

function P_Reult() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <h3>
          Result 페이지 입니다!
        </h3>
      </header>
    </div>
  );
}
export default App;