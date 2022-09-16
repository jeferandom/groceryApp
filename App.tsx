import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BoxItem from './components/GenericComponents/BoxItem';
import List from './components/GenericComponents/List';
import products from "./data/products.json"
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <List
        itemComponent={BoxItem}
        data={products.map(product => {
          return { ...product, text: product.product_name }
        })} />
    </View>
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
