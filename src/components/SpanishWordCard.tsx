import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialIcons';

interface SpanishWordCardProps {
  spanish: string;
  english: string;
  pronunciation?: string;
}

const SpanishWordCard: React.FC<SpanishWordCardProps> = ({ 
  spanish, 
  english, 
  pronunciation 
}) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <TouchableOpacity onPress={toggleTranslation} style={styles.content}>
          <View style={styles.wordContainer}>
            <Text style={styles.spanishWord}>{spanish}</Text>
            {pronunciation && (
              <Text style={styles.pronunciation}>[{pronunciation}]</Text>
            )}
          </View>
          
          {showTranslation && (
            <View style={styles.translationContainer}>
              <Icon name="translate" size={20} color="#e74c3c" />
              <Text style={styles.englishWord}>{english}</Text>
            </View>
          )}
          
          <View style={styles.tapIndicator}>
            <Icon 
              name={showTranslation ? "visibility-off" : "visibility"} 
              size={16} 
              color="#7f8c8d" 
            />
            <Text style={styles.tapText}>
              {showTranslation ? "Tap to hide" : "Tap to translate"}
            </Text>
          </View>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginHorizontal: 20,
    elevation: 3,
  },
  content: {
    padding: 10,
  },
  wordContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  spanishWord: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  pronunciation: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginTop: 5,
  },
  translationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  englishWord: {
    fontSize: 18,
    color: '#34495e',
    marginLeft: 8,
  },
  tapIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapText: {
    fontSize: 12,
    color: '#7f8c8d',
    marginLeft: 5,
  },
});

export default SpanishWordCard;
