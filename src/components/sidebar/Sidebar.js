import styled from 'styled-components';
import theme from '../../theme/theme';
import Navigator from './Navigator';


const Sidebar = styled.div`
    background: #5d4f8d;
    width: 180px;
    height: 625px;
    text-align: center;
    color: ${theme.colors.white};
    font-family: ${theme.font.fontFamily};
    box-shadow: ${theme.size.btnBoxShadow1};
    border-right: 0.5em;
    display: flex;
    flex-direction: column;



   

`
export default Sidebar;