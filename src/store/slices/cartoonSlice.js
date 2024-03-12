import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {cartoonService} from "../../services";

const initialState = {
    episodes: [],
    characters: [],
    prevPage: null,
    nextPage: null,
    loading: null,
    error: null
};

const getAllEpisodes = createAsyncThunk(
    'cartoonSlice/getAllEpisodes',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await cartoonService.episodes.getAll(page);
            return data
        } catch (e) {
            thunkAPI.fulfillWithValue(e.response.data);
        }
    }
);

const getCharactersByIds = createAsyncThunk(
    'cartoonSlice/getCharactersByIds',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await cartoonService.characters.getByIds(ids);
            return data
        } catch (e) {
            thunkAPI.fulfillWithValue(e.response.data);
        }
    }
)

const cartoonSlice = createSlice({
        name: 'cartoonSlice',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(getAllEpisodes.fulfilled, (state, action) => {
                    const {info: {prev, next}, results} = action.payload;
                    state.episodes = results;
                    state.prevPage = prev;
                    state.nextPage = next;
                })
                .addCase(getCharactersByIds.fulfilled, (state, action) => {
                    state.characters = action.payload;
                })
                .addMatcher(isFulfilled(getAllEpisodes, getCharactersByIds), (state) => {
                    state.loading = false;
                    state.error = null;
                })
                .addMatcher(isPending(getAllEpisodes, getCharactersByIds), (state) => {
                    state.loading = true;
                })
                .addMatcher(isRejected(getAllEpisodes, getCharactersByIds), (state, action) => {
                    state.error = action.payload.detail;
                    state.loading = false;
                })
        }
    }
);

const {reducer: cartoonReducer, actions} = cartoonSlice;

const cartoonActions = {
    ...actions,
    getAllEpisodes,
    getCharactersByIds
};

export {
    cartoonReducer,
    cartoonActions
};