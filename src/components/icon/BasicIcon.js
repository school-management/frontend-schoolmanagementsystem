import styled from 'styled-components';
import theme from '../../theme/theme';

const BasicIcon = styled.i`
       
       && {
        color: ${props => props.primary ? theme.colors.gray : props.secondary ? theme.colors.btnPurple : theme.colors.black};    
        font-size:22px;
       }
/* 
       &:hover {
            color: ${props => props.primary ? theme.colors.white : props.secondary ? theme.colors.white : theme.colors.btnPurple};
            transform: translateX(2px) translateZ(3px) translateX(1px);
            transition: 10ms;
            cursor: pointer;
            
            
        } */

    
    }

`

export default BasicIcon;