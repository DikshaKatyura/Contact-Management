import {createSlice,PayloadAction} from '@reduxjs/toolkit';


const initialState:stateType = {
    isActive : 'inactive',
    showSidemenu : false
}


const uiSlice = createSlice({
    name : 'ui',
    initialState : initialState,
    reducers : {
        setIsActive(state,action:PayloadAction<string>){
            state.isActive = action.payload
        },
        setShowSidemenu(state){
            state.showSidemenu = !state.showSidemenu;
        }
    }
    
});


export type stateType = {
    isActive : string,
    showSidemenu : boolean
}
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;