import { useEffect, useState } from "react";
import { Button, View, Text, TextInput } from "react-native"
import BoxItem from "../../GenericComponents/BoxItem";
import List from "../../GenericComponents/List";
import AddShoppingListButton from "./AddShoppingListButton";
import Title from "../../GenericComponents/Title";

import { RootState } from "../../../state/store";
import { useAppSelector } from "../../../redux/hooks";


const ShoppingLists = () => {

  const { shoppingLists } = useAppSelector((state: RootState) => state.shoppingLists)

  console.log('shoppingLists', shoppingLists)

  return (
    <View>
      <Title text="Shopping Lists"/>
      <List
        itemComponent={BoxItem}
        data={shoppingLists.map((shoppingList, i) => {
          return { ...shoppingList, text: shoppingList.name, id: shoppingList.id }
        })} />
      <AddShoppingListButton />
    </View>
  )
}


export default ShoppingLists