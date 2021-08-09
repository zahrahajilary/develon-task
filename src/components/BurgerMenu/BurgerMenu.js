import React from 'react';
import {useSelector} from "react-redux";
import {BurgerMenuContainer} from "./BurgerMenu.styled";


const BurgerMenu = ({openHandler})=> {
    const open = useSelector(state =>  state.menu.status);
    console.log(open,'opennnnnn');
return (
    <BurgerMenuContainer onClick={()=>openHandler()} open={open}>
        <div/>
        <div/>
        <div/>
    </BurgerMenuContainer>
)
};
export default BurgerMenu
