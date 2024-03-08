import axios from"axios";
import { propertyAction } from "./property-slice";
import Search from "antd/es/input/Search";

//action creator to fetch properties

export const getAllProperties =()=>async(dispatch,getState)=>{
    try{
        dispatch(propertyAction.getRequest())

        const{SearchParams}=getState().properties

        const response = await axios.get(`/api/rent/listing`,{
            params:{...SearchParams},
        });

        if(!response){
            throw new Error("Could not fetch any properties")            
        }

        const {data} =response;
        dispatch(propertyAction.getProperties(data));
    }
    catch(error){
        dispatch(propertyAction.getErrors(error.message));
    }
};