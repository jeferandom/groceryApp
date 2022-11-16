import { Dimensions, FlatList, StyleSheet, View } from "react-native"

import ShoppingListItem from "./ShoppingListItem";
import { RootState } from "../../../state/store";
import { useAppSelector } from "../../../redux/hooks";

const ShoppingLists = () => {
  const { shoppingLists } = useAppSelector((state: RootState) => state.shoppingLists)
  console.log('shoppingLists', shoppingLists)
  return (
    <View style={{height: Dimensions.get('window').height-200}}>
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
            key={item.id} item={item}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


export default ShoppingLists
