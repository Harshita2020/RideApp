import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RideCard({ ride, isSelected, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        isSelected && styles.selectedCard
      ]}
    >
      <View style={styles.row}>
        <Text style={styles.carType}>{ride.carType}</Text>
        <Text style={styles.price}>₹{ride.price}</Text>
      </View>

      <Text style={styles.text}>Driver: {ride.driverName}</Text>
      <Text style={styles.text}>ETA: {ride.ETA}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
    elevation: 3,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#007bff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  carType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#555',
  },
});