import {createSlice,PayloadAction} from '@reduxjs/toolkit';


const initialState:stateType = {
    isActive : 'inactive'
}


const uiSlice = createSlice({
    name : 'ui',
    initialState : initialState,
    reducers : {
        setIsActive(state,action:PayloadAction<string>){
            state.isActive = action.payload
        }
    }
    
});


export type stateType = {
    isActive : string
}
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;