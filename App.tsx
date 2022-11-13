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
        <Wavy
          customStyles={styles.svgCurve}
          customHeight={100}
          customTop={0}
          customBgColor="#44b2dd"
          customWavePattern="M0,96L60,133.3C120,171,240,245,360,250.7C480,256,600,192,720,176C840,160,960,192,1080,208C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
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
