import { db } from '../../../firebase-config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Button, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { addNewShoppingList } from '../../../redux/shoppingListsSlice'

const AddShoppingList = () => {
  const [newShoppingListText, setNewShoppingListText] = useState("")
  const dispatch = useAppDispatch();

  const handleAddNewPress = async (text: string) => {
    const newShoppingList = { name: text, id: `${Math.random()}${text}`, dbSynced: false }
    dispatch(addNewShoppingList(newShoppingList))
    try {
      await addDoc(collection(db, 'shoppingLists'), {
        title: newShoppingList.name,
        tempId: newShoppingList.id,
        created: Timestamp.now()
      })

    } catch (error) {
      console.log('error', error)
    }



  }

  return (
    <View>
      <TextInput onChangeText={(text) => { setNewShoppingListText(text) }} />
      <Button title="Add New Shopping List" onPress={() => handleAddNewPress(newShoppingListText)} />
    </View>
  )
}
export default AddShoppingList;
