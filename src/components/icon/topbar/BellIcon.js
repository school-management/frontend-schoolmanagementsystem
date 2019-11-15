import styled, { css } from 'styled-components';
import theme from '../../../theme/theme';

const BellIcon = styled.img`
    
    /* changed the fill color in svg for temporary use */
    fill: ${theme.colors.main};
    color: ${theme.colors.main};
    height: 17px;
    cursor: pointer;    
    margin-top: 1.4em;
    background: ${theme.colors.base};
    border-radius: 0.4em;
    border: 1px thin ${theme.colors.gray};

    ${props => props.content && css`
    background: ${theme.colors.sidebar};
    fill: ${theme.colors.sidebar};
    `}
`

export default BellIcon;