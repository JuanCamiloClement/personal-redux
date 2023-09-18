import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from './components/Button';
import Display from './components/Display';
import Posts from './components/Posts';
import {
  increment,
  decrement,
  reset,
  defineNumberToIncrement,
  incrementByAmount,
  selectNumberToIncrement
} from './store/slices/counterSlice'

function App() {
  const store = useSelector(selectNumberToIncrement)
  const dispatch = useDispatch();

  return (
    <>
      <Display />
      <Button handleFunction={() => dispatch(increment())}>Incrementar</Button>
      <Button handleFunction={() => dispatch(decrement())}>Decrementar</Button>
      <Button handleFunction={() => dispatch(reset())}>Reset</Button>
      <input
        type="number"
        value={store}
        onChange={(e) => dispatch(defineNumberToIncrement(e.target.value))}
      />
      <Button handleFunction={() => dispatch(incrementByAmount())}>Increment by amount</Button>
      <Posts />
    </>
  )
}

export default App
