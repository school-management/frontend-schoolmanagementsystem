import styled from 'styled-components';
import theme from '../../theme/theme';

const IconOnly = styled.i`
       
       && {
        color: ${props => props.primary ? theme.colors.white : props.secondary ? theme.colors.btnPurple : theme.colors.btnPurple} ;    
        cursor: pointer;
       }

       &:hover {
            color: ${props => props.primary ? theme.colors.white : props.secondary ? theme.colors.white : theme.colors.white};
            transform: translateX(10px) translate3d(200px);
            transition-duration: 5ms;
            transition: 10ms;
            cursor: pointer;
        }

        

    }

`

export default IconOnly;