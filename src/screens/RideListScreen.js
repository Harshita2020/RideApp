import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import RideCard from '../components/RideCard';
import { useEffect, useState } from 'react';
import { getRides } from '../api/api';
// const rides = [
//   { id: '1', driverName: 'Rahul', carType: 'Mini', price: 120, ETA: '5 mins' },
//   { id: '2', driverName: 'Aman', carType: 'Sedan', price: 180, ETA: '8 mins' },
//   { id: '3', driverName: 'Ravi', carType: 'SUV', price: 250, ETA: '10 mins' },
// ];

export default function RideListScreen({ route, navigation  }) {
  const [selectedRideId, setSelectedRideId] = useState(null);
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
    const data = await getRides(pickup, drop);
    setRides(data);
  };

  fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
    setLoading(true);
    const data = await getRides(pickup, drop);
    setRides(data);
    setLoading(false);
  };

    fetchData();
  }, []);
  const pickup = route?.params?.pickup || 'Unknown';
  const drop = route?.params?.drop || 'Unknown';

if (loading) {
  return (
    <View style={styles.center}>
      <Text style={styles.loadingEmoji}>🚗</Text>
      <Text style={styles.loadingText}>Finding rides near you...</Text>
    </View>
  );
}

if (!rides.length) {
  return (
    <View style={styles.center}>
      <Text style={styles.emptyEmoji}>😕</Text>
      <Text style={styles.emptyTitle}>No rides available</Text>
      <Text style={styles.emptySubtext}>
        Try a different pickup or drop location
      </Text>
    </View>
  );
}
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
      {selectedRideId && (
              <Text style={{ marginBottom: 10 }}>
                Selected Ride: {rides.find(r => r.id === selectedRideId)?.carType}
              </Text>
            )}

      <TouchableOpacity
        onPress={() => {
          const selectedRide = rides.find(r => r.id === selectedRideId);

          navigation.replace('Confirm', {
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
center: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#f5f5f5',
},

loadingEmoji: {
  fontSize: 40,
  marginBottom: 10,
},

loadingText: {
  fontSize: 16,
  color: '#555',
},

emptyEmoji: {
  fontSize: 40,
  marginBottom: 10,
},

emptyTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 5,
},

emptySubtext: {
  fontSize: 14,
  color: '#777',
  textAlign: 'center',
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