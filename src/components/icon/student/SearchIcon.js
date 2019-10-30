import styled from 'styled-components';
import theme from '../../../theme/theme';

const SearchIcon = styled.img`
    
    /* changed the fill color in svg for temporary use */
    fill: ${theme.colors.main};
    color: ${theme.colors.main};
    height: 17px;
    cursor: pointer;    
    margin-top: 1.4em;
    background: ${theme.colors.base};
    border-radius: 0.4em;
    border: 1px thin ${theme.colors.gray};
`

export default SearchIcon;