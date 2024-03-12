import {configureStore} from "@reduxjs/toolkit";

import {cartoonReducer} from "./slices";

const store = configureStore({
    reducer: {
        cartoon: cartoonReducer
    }
});

export {store};