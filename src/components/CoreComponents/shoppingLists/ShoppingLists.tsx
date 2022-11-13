import { FlatList } from "react-native"

import ShoppingListItem from "./ShoppingListItem";
import { RootState } from "../../../state/store";
import { useAppSelector } from "../../../redux/hooks";

const ShoppingLists = () => {
  const { shoppingLists } = useAppSelector((state: RootState) => state.shoppingLists)
  console.log('shoppingLists', shoppingLists)
  return (
    <FlatList
      data={[
        {
          id: "Test",
          title: "Desayunos",
          detail: "Test",
          products: []
        },
        {
          id: "Test",
          title: "Comestibles",
          detail: "Test",
          products: []
        },
        {
          id: "Test",
          title: "Casa",
          detail: "Test",
          products: []
        },
        {
          id: "Test",
          title: "Insumos Aseo",
          detail: "Test",
          products: []
        },
      ]}
      renderItem={({ item }) => (
        <ShoppingListItem
          key={item.id} item = {item}
        />
      )}
      keyExtractor={item => item.id}
    />
  )
}


export default ShoppingLists