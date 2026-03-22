import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';

export default function HomeScreen({ navigation }) {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  useEffect(() => {
    setPickup('');
    setDrop('');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Ride</Text>

      <TextInput
        placeholder="Pickup Location"
        value={pickup}
        onChangeText={setPickup}
        style={styles.input}
      />

      <TextInput
        placeholder="Drop Location"
        value={drop}
        onChangeText={setDrop}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Rides', {
            pickup: pickup,
            drop: drop,
          })
        }
        disabled={!pickup || !drop}
        style={[
          styles.button,
          (!pickup || !drop) && { backgroundColor: '#ccc' }
        ]}
      >
        <Text style={styles.buttonText}>Find Ride</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
  backgroundColor: '#007bff',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 10,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});