import styled from 'styled-components'
import {Link} from "react-router-dom";

export const MenuItemContainer = styled(Link)`
    font-size:16px;
    margin:16px;
    height:40px;
    justify-content:center;
    align-item:center;
   ${({ theme }) => theme.primaryLight};
    font-weight:bold;
    &:hover {
      width:100%; 
      background-color:#ecebf8;
    }
    
`
