import styled from 'styled-components';
import theme from '../../theme/theme';

const Heading3 = styled.h3`
    font-family:${theme.font.fontFamily};
    color: ${theme.colors.gray};
    font-weight: 600;
    letter-spacing: -0.8px;
    text-align: center;
    box-shadow: "1px 2px 4px rgba(0,0,0, 0.05)";
    opacity: 0.8;
`

export default Heading3;