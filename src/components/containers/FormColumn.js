import styled from 'styled-components';
import theme from '../../theme/theme';

export const FormRow = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: stretch;
    padding-bottom: 2em;
    justify-content:space-between;
`

export const FormColumn = styled.div`
    flex-direction: column;
    flex-basis: ${props => props.fieldWidth ? "50em" : props.formGap ? "14em" : props.viewprofile ? "70em" : props.admissionForm ? "50em" : ""};
    justify-content: space-between;

`

export const FormWrapper = styled.section`
padding: 0.2em;
background: ${ theme.colors.white};

`

