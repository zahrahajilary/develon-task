import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Content from "../pages/content/content";
import Menu from "../components/Menu/Menu";
import { menuHandler } from "../store/menu/actions";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Text from "../components/Text/Text";
import {ContentContainer,PageContainer} from "./PageContainer.styled";

const Container = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const openMenu = useSelector((state) => state.menu.status);

  const openMenuHandler = () => {
    dispatch(menuHandler(true));
  };
  return (
    <PageContainer>
      {openMenu === false ? <BurgerMenu openHandler={openMenuHandler} /> : <Menu />}
      <ContentContainer open={openMenu}>
        {categoryId ? (
          <Content id={categoryId} />
        ) : (
        <Text text={'Hi There Please Select A Category!'}/>
        )}
      </ContentContainer>
    </PageContainer>
  );
};
export default Container;
