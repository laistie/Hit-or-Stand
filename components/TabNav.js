import { StyleSheet, Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './Home';
import RulesScreen from './Rules';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { display: 'none' },
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#34623F',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}>
        <Tab.Screen name="Início" 
        component={ HomeScreen } 
        options={{    
            tabBarIcon: ({ focused }) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                    <Image
                        source={require('../assets/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#BF0603' : '#0A0908'
                        }}
                    />
                    <Text style={{color: focused ?  '#BF0603' : '#0A0908', fontSize: 12}}> INÍCIO </Text>
                </View>
            ),
            }}/>
        <Tab.Screen name="Regras do jogo" 
        component={ RulesScreen } 
        options={{    
            tabBarIcon: ({ focused }) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                    <Image
                        source={require('../assets/rules.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#BF0603' : '#0A0908'
                        }}
                    />
                    <Text style={{color: focused ?  '#BF0603' : '#0A0908', fontSize: 12}}> INÍCIO </Text>
                </View>
            ),
            }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevtation: 5
    }
});

export default Tabs