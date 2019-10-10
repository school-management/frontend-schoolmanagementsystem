import styled from 'styled-components';
import theme from '../../theme/theme';

const IconImg = styled.img`
    &::before {
        color: ${theme.icon.beforeColor}
    }
    &:hover {
        color: ${theme.icon.hoverColor}
    }
    padding: -10px -20px;

`

export default IconImg;