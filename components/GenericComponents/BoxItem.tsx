import { Text, View } from "react-native"
import colors from "../../constants/colors"


export default ({item}) => {
  return (
    <View style={{ backgroundColor: colors.primary, height:25, width:300 }}>
            <Text>{item.text}</Text>
    </View>
  )
}