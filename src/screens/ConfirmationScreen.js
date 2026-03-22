import { View, Text, StyleSheet } from 'react-native';

export default function ConfirmationScreen({ route }) {
  const { ride, pickup, drop } = route.params;

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.title}>Ride Confirmed 🎉</Text>

        <Text style={styles.route}>
          {pickup} → {drop}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.text}>
          🚗 {ride.carType}
        </Text>

        <Text style={styles.text}>
          👤 {ride.driverName}
        </Text>

        <Text style={styles.text}>
          ⏱ ETA: {ride.ETA}
        </Text>

        <Text style={styles.price}>
          ₹{ride.price}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  route: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#007bff',
  },
});