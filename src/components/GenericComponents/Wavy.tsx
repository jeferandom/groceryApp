import { Dimensions, View } from 'react-native';
import Svg, { Path, SvgCss } from 'react-native-svg';

export default Wavy = ({
  customStyles={
    borderRadius: 5,
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  customHeight=100,
  customTop=0,
  customBgColor="#44b2dd",
  customWavePattern="M0,96L60,133.3C120,171,240,245,360,250.7C480,256,600,192,720,176C840,160,960,192,1080,208C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"}) => {
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