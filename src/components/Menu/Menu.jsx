import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiCall } from "../../utils";
import MenuItem from "../MenuItem/MenuItem";
import { limitItemHandler, selectedCategory } from "../../store/categories/actions";
import { MenuContainer } from "./Menu.styled";
import { menuHandler } from "../../store/menu/actions";

const Menu = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await apiCall("categories");
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
      <div style={{ color: "black" }} onClick={closeMenuHandler}>
        X
      </div>
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
