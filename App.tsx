import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { store } from "./src/state/store"
import { Provider } from 'react-redux';
import ShoppingLists from './src/components/CoreComponents/shoppingLists/ShoppingLists';


export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ShoppingLists />
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
