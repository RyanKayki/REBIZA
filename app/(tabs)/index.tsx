import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>REBIZA TRANSPORTES</Text>
      </View>
      <View style={styles.menuContainer}>
        {[...Array(9)].map((_, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>Botão {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1D3D47',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    width: '30%',
    margin: 10,
    padding: 20,
    backgroundColor: '#A1CEDC',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
