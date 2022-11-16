import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View } from 'react-native';
import { RootState, store } from "./src/state/store"
import { Provider } from 'react-redux';
import ShoppingLists from './src/components/CoreComponents/shoppingLists/ShoppingLists';
import AddShoppingListButton from './src/components/CoreComponents/shoppingLists/AddShoppingListButton';
import { useAppSelector } from './src/redux/hooks';
import Wavy from './src/components/GenericComponents/Wavy';



export default function App() {
  // mover dentro del contexto const { shoppingLists } = useAppSelector((state: RootState) => state.shoppingLists)

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Wavy />
        <StatusBar style="auto" />
        <ShoppingLists height={200} fontStyle={{
          fontSize: 20,
          color: "#38b9e8",
        }} bgColor={"#1e062a"} />
        <AddShoppingListButton />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  svgCurve: {
    borderRadius: 5,
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
