import {createSlice,PayloadAction} from '@reduxjs/toolkit';


const initialState:stateType = {
    isActive : 'active',
    showSidemenu : false,
    formError : false
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
        },
        setFormError(state){
            state.formError = !state.formError;
        }
    }
    
});


export type stateType = {
    isActive : string,
    showSidemenu : boolean,
    formError : boolean
}
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;