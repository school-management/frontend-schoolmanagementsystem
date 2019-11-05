import styled from 'styled-components';
import theme from '../../theme/theme';

export const Wrapper = styled.div`
  height: auto;
  width: 10em;
  padding: 0px 8px 16px 8px;
  box-sizing: border-box;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
  font-family: ${theme.font.fontFamily};
  font-weight: 700;
  color: ${theme.colors.gray};
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: ${theme.colors.main};
    border: 1px solid ${theme.colors.main};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;