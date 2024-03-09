import {useDispatch} from "react-redux";

import {counter2Actions} from "../redux/slices/counter2Slice";

const Two = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(counter2Actions.inc())}>inc2</button>
            <button onClick={() => dispatch(counter2Actions.dec())}>dec2</button>
            <button onClick={() => dispatch(counter2Actions.reset('Hooray'))}>reset2</button>
            <button onClick={() => dispatch(counter2Actions.plusString('Boo'))}>plusString</button>
        </div>
    );
};

export {Two};