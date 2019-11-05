import styled from 'styled-components';

const Text = styled.p`
  margin: 8px auto;
`
const Error = styled(Text)`
  font-size: 12px;
  color: red;
`
const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.error ? 'red' : 'black'};
  margin: 0;
`
export {
    Text,
    Error,
    StyledInput
};