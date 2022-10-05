import { FlatList, View, Text } from "react-native"

const DefaultItem = ({ item }) => {
  return (
    <View>
      <Text>{item.text}</Text>
    </View>
  )
}

const List = ({ data, itemComponent }) => {

  const renderItem = ({ item }) => (
    <DefaultItem item={item} />
  )
  return (
    <FlatList
      data={data}
      renderItem={itemComponent ? itemComponent : renderItem}
      keyExtractor={item => item.id}
    />

  )
}

export default List;