import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { devicesData } from '../data';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.iconHeader}>🏠</Text>
        <Text style={styles.title}>Smart Home</Text>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>Welcome, Student!</Text>
      </View>

      <View style={styles.grid}>
        {devicesData.map((device) => (
          <View key={device.id} style={[styles.card, { backgroundColor: device.color }]}>
            <Text style={styles.cardIcon}>{device.icon}</Text>
            <Text style={styles.cardTitle}>{device.shortName}</Text>
            <View style={[styles.statusBadge, { backgroundColor: device.statusColor }]}>
              <Text style={styles.statusText}>{device.status}</Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Devices')}
      >
        <Text style={styles.buttonText}>📑 VIEW DEVICES</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20, justifyContent: 'space-between' },
  header: { alignItems: 'center', marginTop: 40, marginBottom: 20 },
  iconHeader: { fontSize: 40, color: '#1976D2' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '47%', padding: 20, borderRadius: 15, alignItems: 'center', marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  cardIcon: { fontSize: 40, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  statusBadge: { paddingHorizontal: 15, paddingVertical: 5, borderRadius: 12 },
  statusText: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  button: { backgroundColor: '#1976D2', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});