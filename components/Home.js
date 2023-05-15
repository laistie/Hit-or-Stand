import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.homeHeader}> Hit or Stand? </Text>
        <Text style={styles.homeH2}> Hitar 21 nunca foi tão fácil </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#036016'
    },
    homeHeader: {
        fontSize: 48,
        color: '#F5F5F5',
        textTransform: 'uppercase'
    },
    homeH2: {
        fontSize: 24,
        color: '#F5F5F5',
    }
})

export default HomeScreen