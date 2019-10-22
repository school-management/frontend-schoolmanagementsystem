import styled, { css } from "styled-components";
import theme from "../../theme/theme";



const PlaceholderInput = styled.input`
    padding: 0.6em;
    color: ${theme.colors.gray};
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    height: 26px;

    border-bottom-color: ${theme.colors.main};
    ::placeholder {
      color: ${theme.colors.main};
    font-weight: 600;
    };
   


    &:focus {
      font-size: 14px;
      height: 27px;
      box-shadow: '3px, 1px, 2px, 2px rgba(0,0,0,0.10)';
      content: attr(placeholder);
      ::placeholder  {
      font-size: 11.5px;
      letter-spacing: 0.7px;
      transform: translateY(-17px);
      
      transition: 0.3s linear;
      color: ${theme.colors.main};
      font-weight: 580;
    };
      
    };

    
    &::-webkit-input-placeholder {
      transition: 0.4s linear;
    };
    };

    &::after{
      font-size: 14px;
      height: 27px;
      box-shadow: '3px, 1px, 2px, 2px rgba(0,0,0,0.10)';
      content: attr(placeholder);
      ::placeholder {
      font-size: 11.5px;
      letter-spacing: 0.7px;
      transform: translateY(-17px);
      
      transition: 0.3s linear;
      color: ${theme.colors.main};
      font-weight: 580;
    };
    };
  
  
    
    };

  /* && {
    padding: 0.6em;
    color: ${theme.colors.gray};
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    
    &::placeholder {
      color: ${theme.colors.gray};
      padding: 2px;
      font-weight: 550;
      pointer-events: none;
      position: fixed;
    };
  };

  &:focus {
    padding: 11px;
    border-bottom-color: ${theme.colors.main};
    
    &::placeholder {
      transform: translateY(-13.5px) translateX(-3px);
      transition: 0.2s linear;
      padding: 0.2px;
      font-size: 10.5px;
      opacity: 0.95;
      position: fixed;
      letter-spacing: 0.5px;
      line-height: 15px;
      color: ${theme.colors.main};
    };
  };

  &:hover {

  } */

  


`;

export default PlaceholderInput;
