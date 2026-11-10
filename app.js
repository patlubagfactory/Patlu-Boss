// Patlu Boss Master App Controller & Voice Listener
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { processVoiceCommand } from './publisher.js';

export default function PatluBossApp() {
  const [commandText, setCommandText] = useState('');
  const [status, setStatus] = useState('System Ready for Action');
  const [loading, setLoading] = useState(false);

  const handleExecute = async () => {
    if (!commandText.trim()) {
      setStatus('Please enter or speak a command!');
      return;
    }

    setLoading(true);
    setStatus('Processing Master Command...');

    try {
      const result = await processVoiceCommand(commandText);
      setStatus(result);
    } catch (error) {
      console.error(error);
      setStatus('Error executing command!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>PATLU BOSS MASTER APP</Text>
      <Text style={styles.subTitle}>Autonomous All-in-One AI Controller</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Voice / Text Command Input:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Upload new bag design & post everywhere"
          placeholderTextColor="#888"
          value={commandText}
          onChangeText={setCommandText}
          multiline
        />

        <TouchableOpacity 
          style={[styles.button, loading && styles.disabledButton]} 
          onPress={handleExecute}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{loading ? 'Executing...' : 'Execute Master Command'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.statusLabel}>System Status:</Text>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 5,
    textAlign: 'center',
  },
