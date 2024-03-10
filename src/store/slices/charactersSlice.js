import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
};

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {
        setResponse: (state, actions) => {
            const {info: {prev, next}, results} = actions.payload;
            state.prevPage = prev;
            state.nextPage = next;
            state.characters = results;
        }
    }
});

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions = {
    ...actions
};

export {
    charactersReducer,
    charactersActions
};