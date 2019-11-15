import styled from 'styled-components';
import theme from '../../../../theme/theme';

const CardHeader = styled.div`
    margin: -1.3em;
    background: ${theme.colors.sidebar};
    height: 1.5em;
    width: 32.4em;
    font-weight: 600;
    align-content: center;
    color: ${theme.colors.white};
    border-radius: 0.4em;
    text-align: center;
`

export default CardHeader;