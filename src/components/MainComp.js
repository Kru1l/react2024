import {useSelector} from "react-redux";

import {One} from "./One";
import {Two} from "./Two";

const MainComp = () => {
    const {count} = useSelector(state => state.counter1);
    const {count: count2} = useSelector(state => state.counter2);

    return (
        <div>
            count: {count}
            <One/>
            <hr/>
            count2: {count2}
            <Two/>
        </div>
    );
};

export {MainComp};