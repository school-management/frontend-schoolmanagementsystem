import styled from 'styled-components';
import theme from '../../theme/theme';

export const FormRow = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    padding-bottom:2em;
`

export const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const FormWrapper = styled.section`
    padding: 0.2em;
    background: ${theme.colors.white};

`

