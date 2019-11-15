import styled from 'styled-components';
import theme from '../../theme/theme';
import Navigator from '../sidebar/Navigator';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';





const NavLink = styled(Link)`

        background: ${theme.colors.sidebar};
        padding: 0.8em;
        cursor: pointer;
        border-radius: 1.6em;
        text-decoration: none;
        outline: none;
        text-align: justify;
        font-size: 12.5px;
        font-weight: 580;
        color: ${theme.colors.white};
        font-family: ${theme.font.fontFamily};
        z-index: 1000;

`
export default NavLink;