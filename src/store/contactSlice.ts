import {createSlice,PayloadAction} from '@reduxjs/toolkit';

type listType = {
    id : string,
    firstname : string,
    lastname : string,
    isActive : boolean
}

type stateType = {
    list : listType[]
}

const initialState: stateType = {
    list : [],

}


const contactSlice = createSlice({
    name : 'contact',
    initialState : initialState,
    reducers : {
        addContacts(state,action:PayloadAction<listType>){
           state.list.unshift({
                id : action.payload.id,
                firstname : action.payload.firstname,
                lastname : action.payload.lastname,
                isActive : action.payload.isActive
            })
        }
    }
})


export default contactSlice.reducer;

export const contactActions = contactSlice.actions;