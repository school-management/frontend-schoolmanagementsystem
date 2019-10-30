import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const FLabel = styled.label`
  font-size: 11.5px;
  &&{
    color: ${theme.colors.main};
  }
  
`


export const PlaceholderInput = styled.input`

    && {
      padding: 0.6em;
    color: ${theme.colors.gray};
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    height: 27px;

    border-bottom-color: ${theme.colors.main};

    ::placeholder  {
      font-size: 11.5px;
      letter-spacing: 0.7px;
      transform: translateY(-17px);
      /* transition: 0.3s linear; */
      color: ${theme.colors.main};
      font-weight: 580;
    };

    ${FLabel} {
      opacity: 0.9;
    }


   
    }


    &:focus {
      font-size: 14px;
      height: 27px;
      box-shadow: '3px, 1px, 2px, 2px rgba(0,0,0,0.10)';
      content: attr(placeholder);
      ${FLabel} {
      color: purple;
      }
    };
    
    &::-webkit-input-placeholder {
      transition: 0.4s linear;
    };
    
    
    ${props => props.onInput && css`
        ::placeholder {
          font-size: 14px;
          transform: translateY(-10px);
        }
    `}
 


`;


