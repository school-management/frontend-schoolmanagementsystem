import styled from 'styled-components';
import theme from '../../theme/theme';

const FlexContainer = styled.div`
    background: ${theme.colors.base};
    display: flex;
    padding: 0.7em;
    margin-left: 0.3em;
    margin-bottom: 0.4em;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default FlexContainer;   