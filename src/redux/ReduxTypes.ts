export interface ProductModel{
  id: string;
  title: string;
  detail: string;
  priceHistory: number[];
  shoppingLists: number[];
}

export interface ShoppingListModel {
  id: string;
  title: string;
  detail: string;
  products: ProductModel[];
}

export interface ShoppingListsModel {
  shoppingLists: ShoppingListModel[],
  defaultShoppingList: ShoppingListModel,
  isLoading: boolean
}
