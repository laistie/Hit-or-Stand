import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
        backgroundColor: '#34623F',
    },
    container: {
        flex: 1,
        backgroundColor: '#34623F',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    defaultTxt: {
        fontFamily: 'Bungee', 
        color: '#F5F5F5',
    },
    defaultBTxt: {
        fontFamily: 'Bungee', 
        color: '#0A0908',
    },
    defaultRTxt: {
        fontFamily: 'Bungee', 
        color: '#BF0603',
    },
    h1Txt: {
        fontSize: 36,
        marginLeft: '0.5em',
        marginRight: '0.25em',
    },
    h2Txt: {
        fontSize: 20,
        marginLeft: '0.5em',
        marginRight: '0.25em',
    },
    pTxt: { 
        fontSize: 20,
        margin: '0.5em',
    },
    spanTxt: {
        fontSize: 18,
        marginLeft: '1.5em',
    },
    shadowTxt: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
})

export default styles