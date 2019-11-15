import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import NavLink from '../links/NavLink';
import SidenavCard from '../cards/SidenavCard';
import NavBoxSub from './NavBoxSub';


const NavBox = styled.div`
    background: ${theme.colors.sidebar};
    text-align: justify;
    width: 90.8%;
    color: ${theme.colors.white};
    padding: 1em;
    border: none;
    margin-top: 0.2em;
    cursor: pointer;

  

    /* toggling function styles */
    ${props => props.isCheck && css`
    ${NavLink} {
            background: ${theme.colors.base};
            color: ${theme.colors.sidebarHover};
            font-weight: 700;
            
        }
        ${SidenavCard} {
            border-bottom-right-radius: 0.5em;
            background: white;
        }
        background: ${theme.colors.base};
        border-top-left-radius: 1.5em;
        border-bottom-left-radius: 1.5em;
        z-index: 1000;
        box-shadow: ${theme.size.sideBarBoxShadow}
    
    `}


    /* on another link clicks the active content style applies to the new selected item */

    
    
    /* if a nav box have branches then it could be implemented */
    ${props => props.tree && css`    
    &:hover{
        ${NavLink} {
            background: ${theme.colors.sidebarHover};
            color: ${theme.colors.white};
            font-weight: 700;
            
        };
        ${SidenavCard} {
            border-bottom-right-radius: 0.5em;
            background: ${theme.colors.white};
        };
        ${NavBoxSub}{
           
        background: ${theme.colors.sidebar};
        border-top-left-radius: 1.5em;
        border-bottom-left-radius: 1.5em;
        z-index: 1000;
        box-shadow: ${theme.size.sideBarBoxShadow}

        }
        background: ${theme.colors.base};
        border-top-left-radius: 1.5em;
        border-bottom-left-radius: 1.5em;
        z-index: 1000;
        box-shadow: ${theme.size.sideBarBoxShadow}

    }
    `}
   
    &:hover{
        ${NavLink} {
            background: ${theme.colors.base};
            color: ${theme.colors.sidebar};
            font-weight: 700;
            
        }
        ${SidenavCard} {
            border-bottom-right-radius: 0.5em;
            background: ${theme.colors.white};
        }
        background: ${theme.colors.base};
        border-top-left-radius: 1.5em;
        border-bottom-left-radius: 1.5em;
        z-index: 1000;
        box-shadow: ${theme.size.sideBarBoxShadow}

    }


    /* default checked area */
    ${props => props.default && css`
    ${NavLink} {
            background: ${theme.colors.base};
            color: ${theme.colors.sidebar};
            font-weight: 700;
            
        }
        ${SidenavCard} {
            border-bottom-right-radius: 0.5em;
            background: white;
        }
        background: ${theme.colors.base};
        border-top-left-radius: 1.5em;
        border-bottom-left-radius: 1.5em;
        z-index: 1000;
        box-shadow: ${theme.size.sideBarBoxShadow}

    `}

    /* &:default {
        ${NavLink} {
            background: ${theme.colors.base};
            color: ${theme.colors.main};
            
        }
        background: ${theme.colors.base};
        border-top-left-radius: 1.5em;
        border-bottom-left-radius: 1.5em;

    } */

    &::selection {
      background: black;
    }


`

export default NavBox;