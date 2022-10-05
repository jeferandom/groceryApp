import { useEffect, useState } from "react";
import { Button, View, Text, TextInput } from "react-native"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addNewShoppingList } from "../../../redux/shoppingListsSlice";
import { RootState } from "../../../state/store";
import BoxItem from "../../GenericComponents/BoxItem";
import List from "../../GenericComponents/List";
import AddShoppingList from "./AddShoppingList";

const ShoppingLists = () => {

  const { shoppingLists } = useAppSelector((state: RootState) => state.shoppingLists)

  console.log('shoppingLists', shoppingLists)

  return (
    <View>
      <List
        itemComponent={BoxItem}
        data={shoppingLists.map((shoppingList, i) => {
          return { ...shoppingList, text: shoppingList.name, id: shoppingList.id }
        })} />
      <AddShoppingList />
    </View>
  )
}


export default ShoppingLists