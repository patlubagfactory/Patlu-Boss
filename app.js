import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function PatluBossApp() {
  const [status, setStatus] = useState('Patlu Boss is online and ready for your command, Islam Bhai!');

  const handleCommand = (actionType) => {
    switch(actionType) {
      case 'AI_VOICE':
        setStatus('Patlu Boss listening... Generating SEO and captions via ChatGPT.');
        break;
      case 'SOCIAL':
        setStatus('Patlu Boss executing Auto-Post to YouTube, Instagram, and Facebook...');
        break;
      case 'WEBSITE':
        setStatus('Patlu Boss accessing Patlu Bag Factory Seller Hub to list new products...');
        break;
      default:
        setStatus('Ready for action.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🧢 Patlu Boss</Text>
      <Text style={styles.subHeader}>Islam Bhai's Autonomous AI Master Controller</Text>

      <div style={{ padding: 15, background: '#1e1e1e', borderRadius: 10, margin: 10, color: '#fff', border: '1px solid #ff9900' }}>
        <p style={{ color: '#00ffcc', fontWeight: 'bold' }}>Status Log:</p>
        <p>{status}</p>
      </div>

      <TouchableOpacity style={styles.button} onPress={() => handleCommand('AI_VOICE')}>
        <Text style={styles.buttonText}>🎙️ Hello Patlu Boss (Voice / AI Prompt)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleCommand('SOCIAL')}>
        <Text style={styles.buttonText}>🚀 Auto-Post to Social Media</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleCommand('WEBSITE')}>
        <Text style={styles.buttonText}>🛒 Auto-List Product on Website</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = {
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#ff9900', textAlign: 'center', marginTop: 20 },
  subHeader: { fontSize: 13, color: '#aaaaaa', textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#ff9900', padding: 16, borderRadius: 8, marginVertical: 10, alignItems: 'center' },
  buttonText: { color: '#000000', fontSize: 16, fontWeight: 'bold' }
};
