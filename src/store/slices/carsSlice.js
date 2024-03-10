import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};
const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            state.cars = action.payload;
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
        changeTrigger: state => {
            state.trigger = !state.trigger;
        }
    }
});

const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions
};

export {
    carReducer,
    carActions
};