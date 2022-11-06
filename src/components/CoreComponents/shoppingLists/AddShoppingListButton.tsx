import { db } from '../../../firebase-config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Button, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { addNewShoppingList } from '../../../redux/shoppingListsSlice'

const AddShoppingListButton = () => {
  const [newShoppingListTitle, setNewShoppingListTitle] = useState("")
  const [newShoppingListDetail, setNewShoppingListDetail] = useState("")
  const dispatch = useAppDispatch();

  const handleButtonPress = async () => {
    const newShoppingList = {
      id: `${Math.random()}${newShoppingListTitle}`,
      title: newShoppingListTitle,
      detail: newShoppingListDetail,
      products: []
    }
    dispatch(addNewShoppingList(newShoppingList))
    try {
      await addDoc(collection(db, 'shoppingLists'), {
        tempId: newShoppingList.id,
        title: newShoppingList.title,
        detail: newShoppingList.detail,
        products: newShoppingList.products,
        created: Timestamp.now()
      })

    } catch (error) {
      console.log('error', error)
    }



  }

  return (
    <View>
      <TextInput onChangeText={(text) => { setNewShoppingListTitle(text) }} />
      <TextInput onChangeText={(text) => { setNewShoppingListDetail(text) }} />
      <Button title="Add New Shopping List" onPress={() => handleButtonPress()} />
    </View>
  )
}
export default AddShoppingListButton;
