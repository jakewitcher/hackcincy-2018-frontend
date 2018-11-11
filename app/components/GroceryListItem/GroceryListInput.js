import styled from 'styled-components';
import cssVariables from 'cssVariables';

export const Input = styled.input`
  border: 2px solid ${cssVariables.CLR_FIORD};
  border-radius: 4px;
  width: 60px;
  margin: 0 0 8px 24px;
  padding: 2px;
  font-size: 1.25rem;
`;

export default Input;