import { createSlice} from "@reduxjs/toolkit";

const propertySlice=createSlice({
    //slice name
    name:'property',
    //initial state for the property slice
    initialState:{
        properties:[],
        totalProperties:0,
        searchParams:{}, //paramters used to search
        error:null,
        loading:false,

    },

    //reducer function to handle diff actions
    reducers:{
        getRequest(state){
            state.loading = true;
        },

        getProperties(state,action){
            state.properties=action.payload.data;
            state.totalProperties=action.payload.all_properties;
            state.loading = false;
        },

        //action to update search parameter
        updateSearchParams:(state,action)=>{
            state.searchParams=Object.keys(action.payload).length==0?{}:{
                ...state.searchParams,
                ...action.payload,                               

            };
        },

        //action to update error states
        getErrors(state,action){
            state.error=action.payload;
        },
    },
});

export const propertyAction = propertySlice.actions;
export default propertySlice;