import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../state/store"

// Define a type for the slice state
export interface ShoppingList {
  name: string
  id: string
}

// Define the initial state using that type
const initialState = {
  shoppingLists: [],
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
    addNewShoppingList: (state, action: PayloadAction<ShoppingList>) => {
      console.log('action', action)
      state.shoppingLists = [...state.shoppingLists, action.payload]
    },
    deleteShoppingList: (state, action: PayloadAction<ShoppingList>) => {
      state.shoppingLists = [...state.shoppingLists.filter(shoppingList => shoppingList.id != action.payload)]
    }
  }
})

export const { shoppingListsSuccess, addNewShoppingList, deleteShoppingList } = shoppingListsSlice.actions
// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value


export default shoppingListsSlice.reducer

