import { ProductModel } from "./Product";

export interface ShoppingListModel {
  id: string;
  title: string;
  detail: string;
  products: ProductModel[]
}

export interface ShoppingListsModel {
  shoppingLists: ShoppingListModel[],
  defaultShoppingList: ShoppingListModel,
  isLoading: boolean
}
