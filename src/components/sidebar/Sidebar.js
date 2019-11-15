import styled from 'styled-components';
import theme from '../../theme/theme';
import Navigator from './Navigator';


const Sidebar = styled.div`
    background: ${theme.colors.sidebar};
    width: 15%;
    height: 100%;
    flex-direction: column;
    text-align: center;
    color: ${theme.colors.white};
    font-family: ${theme.font.fontFamily};
    box-shadow: ${theme.size.btnBoxShadow1};
    box-shadow: '1px 2px 4px 8px rgba(0, 0, 0, 0.21)';



   

`
export default Sidebar;