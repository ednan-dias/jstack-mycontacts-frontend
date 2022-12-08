import styled from 'styled-components';

export default styled.input`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  border: 2px solid #fff;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color .2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
