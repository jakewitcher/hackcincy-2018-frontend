import styled from 'styled-components';
import cssVariables from 'cssVariables';

export const GroceryListName = styled.h2`
  font-size: 20px;
  color: ${cssVariables.CLR_FIORD};
  margin: 0 0 8px 24px;
  width: 300px;
`;

export const GroceryListPrice = styled.h2`
  font-size: 18px;
  color: ${cssVariables.ORANGE};;
  margin: 0 0 8px 24px;
  display: inline;
`;

export const GroceryListQty = styled.h2`
  font-size: 16px;
  color: #5B697E;
  margin: 0 0 8px 24px;
  display: inline;
`;
