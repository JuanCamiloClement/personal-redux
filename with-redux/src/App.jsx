import './App.css'
import { useDispatch } from 'react-redux';
import Button from './components/Button';
import Count from './components/Count';
import Form from './components/Form';
import Display from './components/Display';
import Posts from './components/Posts';
import {
  incrementCount,
  decrementCount,
  resetCount
} from './store/actions/count.actions';

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Count />
      <Button handleFunction={() => dispatch(incrementCount())}>Increment</Button>
      <Button handleFunction={() => dispatch(decrementCount())}>Decrement</Button>
      <Button handleFunction={() => dispatch(resetCount())}>Reset</Button>
      <Form />
      <Display />
      <Posts />
    </>
  )
}

export default App;
