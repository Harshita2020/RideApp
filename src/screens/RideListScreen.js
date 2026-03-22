import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import RideCard from '../components/RideCard';
import { useState } from 'react';
import { Button } from 'react-native';

const rides = [
  { id: '1', driverName: 'Rahul', carType: 'Mini', price: 120, ETA: '5 mins' },
  { id: '2', driverName: 'Aman', carType: 'Sedan', price: 180, ETA: '8 mins' },
  { id: '3', driverName: 'Ravi', carType: 'SUV', price: 250, ETA: '10 mins' },
];

export default function RideListScreen({ route, navigation  }) {
  const [selectedRideId, setSelectedRideId] = useState(null);
  const pickup = route?.params?.pickup || 'Unknown';
  const drop = route?.params?.drop || 'Unknown';

  
  return (
    <View style={styles.container}>

      <Text style={styles.routeText}>
        {pickup} → {drop}
      </Text>

      <View style={{ flex: 1 }}>
        <FlatList
          data={rides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RideCard
              ride={item}
              isSelected={item.id === selectedRideId}
              onPress={() => setSelectedRideId(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          const selectedRide = rides.find(r => r.id === selectedRideId);

          navigation.navigate('Confirm', {
            ride: selectedRide,
            pickup,
            drop,
          });
        }}
        disabled={!selectedRideId}
        style={[
          styles.button,
          !selectedRideId && styles.disabledButton
        ]}
      >
        <Text style={styles.buttonText}>Confirm Ride</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 15,
  paddingBottom: 30,
  backgroundColor: '#f5f5f5',
},
button: {
  backgroundColor: '#007bff',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginBottom: 20,
},
disabledButton: {
  backgroundColor: '#ccc',
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},
  routeText: {
    fontSize: 16,   
    fontWeight: '600',
    marginBottom: 15,
  },
});