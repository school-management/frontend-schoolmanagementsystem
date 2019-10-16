import styled from 'styled-components';
import theme from '../../theme/theme';
import Navigator from './Navigator';


const Sidebar = styled.div`
    background: #5d4f8d;
    width: 13.%;
    height: 100%;
    text-align: center;
    color: ${theme.colors.white};
    font-family: ${theme.font.fontFamily};
    box-shadow: ${theme.size.btnBoxShadow1};
    display: flex;
    flex-direction: column;



   

`
export default Sidebar;