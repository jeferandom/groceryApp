import { View } from 'react-native';
import Svg, { Path, SvgCss } from 'react-native-svg';

export default Wavy = ({
  customStyles,
  customHeight,
  customTop,
  customBgColor,
  customWavePattern}) => {
  return (
    <View style={customStyles}>
      <View style={{ height: customHeight }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: customTop }}
        >
          <Path
            fill={customBgColor}
            d={customWavePattern}
          />
        </Svg>
      </View>
    </View>
  )

}