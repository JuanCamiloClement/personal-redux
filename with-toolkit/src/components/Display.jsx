import { useSelector } from 'react-redux';
import { selectCount } from '../store/slices/counterSlice';

const Display = () => {
    const storeCount = useSelector(selectCount);

    return (
        <>
            <p>Count: {storeCount}</p>
        </>
    )
}

export default Display;