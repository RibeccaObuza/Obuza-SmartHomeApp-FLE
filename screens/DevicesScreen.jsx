import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { devicesData } from '../data';

export default function DevicesScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.listItem}
      onPress={() => navigation.navigate('DeviceDetails', { device: item })}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.deviceName}>{item.name}</Text>
        <Text style={styles.deviceStatus}>Status: <Text style={{ color: item.statusColor, fontWeight: 'bold' }}>{item.status}</Text></Text>
      </View>
      <View style={styles.toggleMock}>
        <View style={[styles.toggleCircle, { backgroundColor: item.status === 'ON' ? '#4CAF50' : '#CCC' }]} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={devicesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  listContent: { padding: 15 },
  listItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  iconContainer: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  icon: { fontSize: 24 },
  infoContainer: { flex: 1 },
  deviceName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  deviceStatus: { fontSize: 13, color: '#666', marginTop: 4 },
  toggleMock: { width: 40, height: 20, borderRadius: 10, backgroundColor: '#E0E0E0', justifyContent: 'center', paddingHorizontal: 2 },
  toggleCircle: { width: 16, height: 16, borderRadius: 8 },
});