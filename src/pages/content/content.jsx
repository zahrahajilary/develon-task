import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  limitItemHandler,
  startGetCategoryItems,
} from "../../store/categories/actions";
import Card from "../../components/Card/Card";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { ContentContainer } from "./content.styled";

const Content = ({ id }) => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => {
    return state.categories.limit;
  });

  useEffect(() => {
    if (id) {
      getItemsCategory();
    }
  }, [limit, id]);
  const getItemsCategory = () => {
    dispatch(startGetCategoryItems(id, limit));
  };
  const catItems = useSelector((state) => {
    return state.categories.items;
  });
  const loadMoreHandler = () => {
    dispatch(limitItemHandler(limit + 10));
  };

  return (
      <>
    <ContentContainer>
      {catItems &&
        catItems.map((item, index) => <Card imgUrl={item.url} key={index} />)}
    </ContentContainer>
        <LoadMoreBtn onClick={loadMoreHandler}>load more!</LoadMoreBtn>
        </>
  );
};
export default Content;
