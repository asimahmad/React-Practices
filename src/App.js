import './App.css';
import Practice1 from './Components/Practice1'
import Practice2 from './Components/Practice2'
import Practice3 from './Components/Practice3'
import Practice4 from './Components/Practice4'
import {toast}  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Para from './Para'

toast.configure();
function App() {
  const notify = () => toast("Button clicked")
  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
      {/* <Practice3 /> */}
      <button onClick={notify}>Click</button>
      {/* <ToastContainer /> */}
      <Para />

      <Practice4>
        <h2>I am inside of parent</h2>
      </Practice4>


    </div>
  );
}

export default App;
