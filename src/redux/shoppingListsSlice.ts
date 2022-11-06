import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { ShoppingListsModel,ShoppingListModel } from './ReduxTypes';

// Define the initial state using that type
const initialState: ShoppingListsModel = {
  shoppingLists: [],
  defaultShoppingList: {
    id: "",
    title: "",
    detail: "",
    products: []
  },
  isLoading: true
}
export const shoppingListsSlice = createSlice({
  name: "shoppingLists",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    shoppingListsSuccess: (state, action) => {
      state.shoppingLists = action.payload;
      state.isLoading = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addNewShoppingList: (state, action: PayloadAction<ShoppingListModel>) => {
      console.log('action', action)
      state.shoppingLists = [...state.shoppingLists, action.payload]
    },
    deleteShoppingList: (state, action: PayloadAction<ShoppingListsModel>) => {
      state.shoppingLists = [...state.shoppingLists.filter(shoppingList => shoppingList.id != action.payload)]
    }
  }
})

export const { shoppingListsSuccess, addNewShoppingList, deleteShoppingList } = shoppingListsSlice.actions
// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value


export default shoppingListsSlice.reducer

