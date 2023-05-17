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
        fontWeight: 'bold',
        color: '#F5F5F5',
    },
    defaultBTxt: {
        fontWeight: 'bold',
        color: '#0A0908',
    },
    defaultRTxt: {
        fontWeight: 'bold',
        color: '#F10804',
    },
    themedTxt: {
        fontFamily: 'Bungee', 
    },
    h1Txt: {
        fontFamily: 'Bungee', 
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
        marginTop: '1.5em',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        textAlign: 'justify',
    },
    spanTxt: {
        fontSize: 20,
        marginLeft: '1.5em',
    },
    shadowTxt: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    touchable: {
        marginTop: '1.5em',
        backgroundColor: '#036016',
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0.5em',
        borderRadius: 5,
    }
})

export default styles