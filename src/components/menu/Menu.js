import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {apiCall} from "../../services/api";
import MenuItem from "./MenuItem";
import {limitItemHandler, selectedCategory} from "../../redux/categories/actions";

const Menu  = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        getCategories();
    },[]);

    const getCategories = async ()=> {
        try{
            const res = await apiCall('categories');
            setCategories(res);
        }
        catch (e) {
            return e;
        }
    };

    const selectedCategoryHandler =(id)=> {
       dispatch((selectedCategory(id)));
       dispatch((limitItemHandler(10)));
       history.push(`/${id}`);
    };

    return(

        <div style={{display:'flex',
            alignItems:'center',
            width:'240px'
            ,height:'100%',
            backgroundColor:'white',
            position:'fixed',
            flexDirection:'column',
            flex:1
        }}

        >
            {categories && categories.map((item,index)=>(
                <MenuItem item={item} key={index} clicked={()=>selectedCategoryHandler(item.id)}/>
            ))}
        </div>

    )
};
export default Menu
