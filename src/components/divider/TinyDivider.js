import styled from 'styled-components';
import theme from '../../theme/theme';

const TinyDivider = styled.div`
    height: 35px;
    width: 2px;
    flex-direction: column;
    background: ${theme.colors.base};
    margin-top: 0.8em;
`

export default TinyDivider;