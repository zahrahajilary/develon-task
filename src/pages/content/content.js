import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {limitItemHandler, startGetCategoryItems} from "../../redux/categories/actions";
import styled from 'styled-components'
import Card from "../../components/card/Card";

const Content = ({id})=> {
    const dispatch = useDispatch();
    const limit = useSelector((state) => {
        return state.limit;
    });

    useEffect(() => {

        if(id) {
            getItemsCategory();
        }
    }, [limit,id]);
    const getItemsCategory =  () => {
        dispatch(startGetCategoryItems(id,limit))
    };
    const catItems = useSelector((state) => {
        return state.items;
    });
    const loadMoreHandler = () => {
        dispatch(limitItemHandler(limit+10))
    };

    return (
        <div>
        <div style={{display:'flex',height:'100%',flexWrap: 'wrap',justifyContent:'center',flex:3,margin:'16'}}>
            {catItems && catItems.map((item, index) => (
              <Card imgUrl={item.url} key={index} title='hi'/>
            ))}
        </div>
            <button onClick={loadMoreHandler} style={{margin:16,padding:16}}>load more!</button>
        </div>


    )
}
export default Content;
