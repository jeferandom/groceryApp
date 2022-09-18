import shoppingLists from "../../data/api"

import { shoppingListsSuccess } from "../redux/shoppingListsSlice"

export const fetchShoppingLists = () => async dispatch => {
  try {

    setTimeout(() => {
      dispatch(shoppingListsSuccess(shoppingLists))
    }, 1000)


  } catch (error) {
    return console.error(error.message)
  }
}