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
    smallTxt: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    bigTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F5F5F5',
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
        marginLeft: 15,
        marginRight: 5,
    },
    h2Txt: {
        fontSize: 20,
        marginLeft: 15,
        marginRight: 5,
    },
    pTxt: { 
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'justify',
    },
    spanTxt: {
        fontSize: 20,
        marginLeft: 20,
    },
    shadowTxt: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        shadowOffset: {width: -1, height: 5},
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    touchable: {
        marginTop: 20,
        backgroundColor: '#036016',
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 5,
    },
    touchableHighlight: {
        marginTop: 20,
        backgroundColor: '#036016',
        width: '100%',
        padding: 75,
        borderRadius: 5,
        border: 'thick solid #F5F5F5'
    },
    mainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        height: 50,
        width: 75,
        textAlign:'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    deckCard: {
        backgroundColor: '#036016',
    },
    drawnCard: {
        backgroundColor: '#F10804',
    },
})

export default styles