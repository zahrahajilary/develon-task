import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {limitItemHandler, startGetCategoryItems} from "../../redux/categories/actions";
import {ContentContainer} from './content.styled'
import Card from "../../components/Card/Card";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";


const Content = ({id})=> {
    const dispatch = useDispatch();
    const limit = useSelector((state) => {
        return state.categories.limit;
    });
    const openMenu = useSelector((state)=> state.menu.status)

    useEffect(() => {

        if(id) {
            getItemsCategory();
        }
    }, [limit,id]);
    const getItemsCategory =  () => {
        dispatch(startGetCategoryItems(id,limit))
    };
    const catItems = useSelector((state) => {
        return state.categories.items;
    });
    const loadMoreHandler = () => {
        dispatch(limitItemHandler(limit+10))
    };

    return (
        <>
        <ContentContainer open={openMenu}>
            {catItems && catItems.map((item, index) => (
              <Card imgUrl={item.url} key={index} title='hi'/>
            ))}
        </ContentContainer>
            <LoadMoreBtn onClick={loadMoreHandler}>load more!</LoadMoreBtn>
        </>
    )
}
export default Content;
