import React from 'react';
import {useParams} from "react-router";
import {useDispatch,useSelector} from "react-redux";
import Content from "../pages/content/content";
import Menu from "../components/Menu/Menu";
import {HeaderContainer} from "../components/Header/Header.styled";
import hamburger from '../assets/images/hamburger.png';
import {menuHandler} from "../redux/menu/actions";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";


const Container = ()=> {
    const {categoryId} = useParams();
    const dispatch = useDispatch();

    const openMenu = useSelector((state )=>state.menu.status);

    const openMenuHandler = ()=> {
        dispatch(menuHandler(true))
    }
    return(
        <div style={{display:'flex',flexDirection:"row"}}>
            {openMenu === false ?
                <BurgerMenu openHandler={openMenuHandler}/>:
                <Menu/>
            }
                    <div>
                        {categoryId ?
                            <Content id={categoryId}/> :
                            <h1>Hello !! Select a Category</h1>
                        }
                    </div>
        </div>
    );


}
export default Container;
