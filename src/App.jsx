import "./App.css";
import { useSelector, useDispatch } from "react-redux"
import { increment,decrement } from "./Redux/redux";

function App() {
  const dispatch = useDispatch()
  const count = useSelector(function (state) {
    return state.counter.count
  })

  return (
    <div className="box">
      <h1>{count}</h1>

      <button onClick={() => { dispatch(increment()) }}>INC</button>

      <button onClick={() => { dispatch(decrement()) }}>DEC</button>
    </div>
  );
}

export default App;
