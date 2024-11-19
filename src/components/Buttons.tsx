'use client';
import { increment, decrement } from '@/store/count';
import { useDispatch } from 'react-redux';

const Buttons = () => {
    const dispatch = useDispatch(); 

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Inc</button>
            <br />
            <button onClick={() => dispatch(decrement())}>Dec</button>
        </div>
    )
}

export default Buttons;