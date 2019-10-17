import styled from 'styled-components';
import theme from '../../theme/theme';

const FlexContainer = styled.div`
    background: ${theme.colors.base};
    display: flex;
    padding: 1em;
    margin-left: 0.3em;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default FlexContainer;   