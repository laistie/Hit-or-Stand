import { View, Text } from 'react-native';

import styles from '../assets/styles/MainStyle'

function Header() {
    return (
        <View>
            <Text style={[ styles.defaultBTxt, styles.h1Txt, styles.shadowTxt ]}> Hit 
                <Text style={[ styles.defaultTxt, styles.h1Txt ]}> or 
                    <Text style={[ styles.defaultRTxt, styles.h1Txt ]}> Stand? </Text>
                </Text> 
            </Text>
        </View>    
    )
}
  
export default Header;