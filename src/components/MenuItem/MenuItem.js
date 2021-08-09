import React from 'react';
import {MenuItemContainer} from "./MenuItem.styled";

const MenuItem =({item,clicked})=> {
    return(
        <MenuItemContainer to={`/${item.id}`}  onClick={clicked}>{item.name}</MenuItemContainer>
    )
}
export default MenuItem
