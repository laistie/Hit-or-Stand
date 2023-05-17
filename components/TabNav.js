import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Home';
import RulesScreen from './Rules';
import BetsScreen from './Bets';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { display: 'none' },
            tabBarStyle: {
                flex: 1,
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#F5F5F5',
                borderRadius: 5,
                height: 80,
                zIndex: 1000,
                ...styles.shadow
            },
        }}>
        <Tab.Screen name="Início" component={ HomeScreen } 
        options={{    
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={require('../assets/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#F10804' : '#0A0908'
                        }}
                    />
                    <Text style={{color: focused ?  '#F10804' : '#0A0908', fontSize: 12}}> INÍCIO </Text>
                </View>
            ),
            }}/>
        <Tab.Screen name="Regras do jogo" component={ RulesScreen } 
        options={{    
            tabBarIcon: ({ focused }) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={require('../assets/rules.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#F10804' : '#0A0908'
                        }}
                    />
                    <Text style={{color: focused ?  '#F10804' : '#0A0908', fontSize: 12}}> REGRAS </Text>
                </View>
            ),
            }}/>
        <Tab.Screen name="Apostas" component={ BetsScreen } 
        options={{    
            tabBarIcon: ({ focused }) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        source={require('../assets/chip.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#F10804' : '#0A0908'
                        }}
                    />
                    <Text style={{color: focused ?  '#F10804' : '#0A0908', fontSize: 12}}> APOSTAS </Text>
                </View>
            ),
            }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: {width: -1, height: 5},
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    }
})

export default Tabs