import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MenuItem from "../MenuItem/MenuItem";
import { limitItemHandler, selectedCategory } from "../../store/categories/actions";
import {getCategoryList} from "../../services/categories/categories";
import { MenuContainer } from "./Menu.styled";
import {CloseContainer} from "./Close.styled";
import { menuHandler } from "../../store/menu/actions";
import {CloseIcon} from "../Svg";


const Menu = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await getCategoryList();
      setCategories(res);
    } catch (e) {
      return e;
    }
  };

  const selectedCategoryHandler = (id) => {
    dispatch(selectedCategory(id));
    dispatch(limitItemHandler(10));
  };

  const closeMenuHandler = () => {
    dispatch(menuHandler(false));
  };

  return (
    <MenuContainer>
      <CloseContainer onClick={closeMenuHandler}>
        {CloseIcon}
      </CloseContainer>
      {categories &&
        categories.map((item, index) => (
          <MenuItem
            item={item}
            key={index}
            clicked={() => selectedCategoryHandler(item.id)}
          />
        ))}
    </MenuContainer>
  );
};
export default Menu;
