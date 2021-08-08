import {apiCall} from "../api";

export const getCategoryItems = (payload)=>{
    const {id,limit}=payload;
    const url = `images/search?limit=${limit}&category_ids=${id}`;
    return apiCall(url)
}