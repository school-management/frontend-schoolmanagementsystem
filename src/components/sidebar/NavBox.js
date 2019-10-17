import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import NavLink from '../links/NavLink';
import SidenavCard from '../cards/SidenavCard';


const NavBox = styled.div`
    background: ${theme.colors.main};
    text-align: justify;
    width: 9.15em;
    color: ${theme.colors.white};
    padding: 1em;
    border: none;
    margin-top: 0.7em;
    cursor: pointer;

   
    &:hover{
        ${NavLink} {
            background: ${theme.colors.base};
            color: ${theme.colors.main};
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

    }


    /* default checked area */
    ${props => props.default && css`
    ${NavLink} {
            background: ${theme.colors.base};
            color: ${theme.colors.main};
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

`
export default NavBox;