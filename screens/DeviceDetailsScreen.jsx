import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DeviceDetailsScreen({ route }) {
  // Extract device info passed through navigation
  const { device } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={[styles.bigIconContainer, { backgroundColor: device.color }]}>
          <Text style={styles.bigIcon}>{device.icon}</Text>
        </View>
        <Text style={styles.title}>{device.name}</Text>
        <Text style={styles.status}>
          Status: <Text style={{ color: device.statusColor, fontWeight: 'bold' }}>{device.status}</Text>
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: device.statusColor }]}>
            <Text style={styles.actionButtonText}>⏻</Text>
            <Text style={styles.actionButtonText}>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#E0E0E0' }]}>
            <Text style={[styles.actionButtonText, { color: '#333' }]}>⚙️</Text>
            <Text style={[styles.actionButtonText, { color: '#333' }]}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', padding: 20, alignItems: 'center' },
  card: { width: '100%', backgroundColor: 'white', borderRadius: 20, padding: 30, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5, marginTop: 20 },
  bigIconContainer: { width: 100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  bigIcon: { fontSize: 50 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  status: { fontSize: 16, color: '#666', marginBottom: 30 },
  buttonRow: { flexDirection: 'row', width: '100%', justifyContent: 'space-between' },
  actionButton: { flex: 0.48, padding: 15, borderRadius: 10, alignItems: 'center', flexDirection: 'column' },
  actionButtonText: { color: 'white', fontWeight: 'bold', marginTop: 5 },
});