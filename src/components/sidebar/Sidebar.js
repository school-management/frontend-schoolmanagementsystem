import styled from 'styled-components';
import theme from '../../theme/theme';
import Navigator from './Navigator';


const Sidebar = styled.div`
    background: #5d4f8d;
    width: 15%;
    height: 100%;
    text-align: center;
    color: ${theme.colors.white};
    font-family: ${theme.font.fontFamily};
    box-shadow: ${theme.size.btnBoxShadow1};
    display: flex;
    flex-direction: column;
    box-shadow: '1px 2px 4px 8px rgba(0, 0, 0, 0.21)';



   

`
export default Sidebar;