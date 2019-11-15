import styled from 'styled-components';
import theme from '../../theme/theme';

const Content = styled.div`
    background: ${theme.colors.base};
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 95%;
    box-shadow: '1px 2px 4px 8px rgba(0, 0, 0, 0.21)';
    border-radius: 0.3em;
    padding: 0.6em;
`

export default Content;