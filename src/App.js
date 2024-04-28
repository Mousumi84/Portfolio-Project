import './style/App.css';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

function App() {


  return (
    <div className="App">
      <div id='portfolio'>
        <div id='left-box'>
          <LeftBox />
        </div>
        <div id='right-box'>
          <RightBox />
        </div>
      </div>
    </div>
  )
}

export default App;
