import { Text } from 'react-native';
import styled from 'styled-components/native';
import colors from "../../../constants/colors";


const ShoppingListItem = ({ item }) => {
  const { title = `[list title here]`, } = item;
  return (
    <ShoppingListItemBox color={colors.primary} height={80} width={300}>
      <Text>{title}</Text>
    </ShoppingListItemBox>
  )
}

const ShoppingListItemBox = styled.TouchableOpacity`
  flex-direction: row;
  padding: 0 16px;
  margin: 12px 0;
  height:  ${({ height }) => height};
  width:  ${({ width }) => width};
  border-radius: 5 ;
  background-color: ${({ color }) => color};
`;



export default ShoppingListItem