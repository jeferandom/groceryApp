import { useEffect, useState } from "react";
import { Button, View, Text, TextInput } from "react-native"
import { useAppDispatch, useAppSelector } from "../../../src/redux/hooks";
import { addNewShoppingList } from "../../../src/redux/shoppingListsSlice";
import { RootState } from "../../../src/state/store";
import BoxItem from "../../GenericComponents/BoxItem";
import List from "../../GenericComponents/List";

const ShoppingLists = () => {

  const { shoppingLists, isLoading } = useAppSelector((state: RootState) => state.shoppingLists)

  const [newShoppingListText, setNewShoppingListText] = useState()

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('useEffect')
  }, [dispatch])
  console.log('newShoppingListText', newShoppingListText)

  const handleButtonAddNew = (text) => {
    dispatch(addNewShoppingList(text))
  }
  console.log('shoppingLists', shoppingLists)

  return (
    <View>
      <List
        itemComponent={BoxItem}
        data={shoppingLists.map(shoppingList => {
          return { ...shoppingList, text: shoppingList.name }
        })} />
      <TextInput onChangeText={(text) => { setNewShoppingListText(text) }} />
      <Button title="Add New Shopping List" onPress={() => handleButtonAddNew(newShoppingListText)} />
    </View>
  )
}


export default ShoppingLists