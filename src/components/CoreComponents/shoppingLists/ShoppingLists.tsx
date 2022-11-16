import { Dimensions, FlatList, StyleSheet, View } from "react-native"

import ShoppingListItem from "./ShoppingListItem";
import { RootState } from "../../../state/store";
import { useAppSelector } from "../../../redux/hooks";
import colors from "../../../constants/colors";

const ShoppingLists = (props) => {
  const { shoppingLists } = useAppSelector((state: RootState) => state.shoppingLists)
  const { bgColor = "#43da0c", fontStyle, height = Dimensions.get('window').height - 200 } = props
  return (
    <View style={{ height }}>
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
            bgColor={bgColor}
            fontStyle={fontStyle}
            key={item.id}
            item={item}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


export default ShoppingLists
