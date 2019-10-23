import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import NavLink from '../links/NavLink';
import SidenavCard from '../cards/SidenavCard';
import NavBox from './NavBox';
import NavLinkSub from '../links/NavLinkSub';


const NavBoxSub = styled.div`
   background: ${theme.colors.main};
   width: 89%;   
   padding: 1em;
   border: none;
   margin-top: 0.7em;
   cursor: pointer;
   border-top-left-radius: 1.5em;
   border-bottom-left-radius: 1.5em;
   z-index: 1000;
   box-shadow: ${theme.size.sideBarBoxShadow1};
   transform: translateZ(50px);
   

   &:hover {
    transform: translateZ(150px);
    z-index: 800px;
   transition: 0.3s linear;
   background: ${theme.colors.main};
    ${NavLinkSub} {
        transform-style: preserve-3d;
        text-transform:capitalize;
        transition: 0.2s step-end;
      
    }
   }


 
`
export default NavBoxSub;