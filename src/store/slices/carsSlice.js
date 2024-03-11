import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: null,
    carForUpdate: null,
    trigger: null,
    loading: null,
    error: null
};

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, thunkAPI) => {
        try {
            // await new Promise(resolve => setTimeout(resolve, 1000));
            const {data} = await carService.getAll();
            // return thunkAPI.fulfillWithValue(data)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carsSlice/create',
    async ({car}, thunkAPI) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carsSlice/update',
    async ({id, newCar}, thunkAPI) => {
        try {
            const {data} = await carService.updateById(id, newCar);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const deleteById = createAsyncThunk(
    'carsSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(updateById.fulfilled, state => {
                state.carForUpdate = null;
            })
            .addMatcher(isFulfilled(create, updateById, deleteById), state => {
                state.trigger = !state.trigger;
            })
            // .addCase(getAll.pending, state => {
            //     state.loading = true;
            // })
            // .addCase(getAll.rejected, (state, action) => {
            //     state.error = action.payload.detail;
            //     state.loading = false;
            // })
            .addMatcher(isFulfilled(getAll, create, updateById, deleteById), state => {
                state.loading = false;
                state.error = null;
            })
            .addMatcher(isPending(getAll, create, updateById, deleteById), state => {
                state.loading = true;
            })
            .addMatcher(isRejected(getAll, create, updateById, deleteById), (state, action) => {
                state.error = action.payload.detail;
                state.loading = false;
            })
    }
});

const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteById
};

export {
    carReducer,
    carActions
};