import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RootState, store } from "./src/state/store"
import { Provider } from 'react-redux';
import ShoppingLists from './src/components/CoreComponents/shoppingLists/ShoppingLists';
import AddShoppingListButton from './src/components/CoreComponents/shoppingLists/AddShoppingListButton';
import { useAppSelector } from './src/redux/hooks';



export default function App() {
  // mover dentro del contexto const { shoppingLists } = useAppSelector((state: RootState) => state.shoppingLists)

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ShoppingLists shoppingLists={[
          {
            id: "Test",
            title: "Test",
            detail: "Test",
            products: []
          }
        ]} />
        <AddShoppingListButton />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
