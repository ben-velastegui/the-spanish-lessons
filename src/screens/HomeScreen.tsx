import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>The Spanish Lessons</Text>
        <Text style={styles.subtitle}>Elegant language learning for the modern mind</Text>
      </View>

      <Card style={styles.welcomeCard}>
        <Card.Content>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.welcomeText}>
            Discover the beauty of Spanish through refined instruction. Our approach combines traditional teaching methods with contemporary elegance, creating an environment where language flourishes naturally.
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.featuresGrid}>
        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => navigation.navigate('Courses')}
        >
          <Icon name="school" size={32} color="#2C3E50" />
          <Text style={styles.featureTitle}>Courses</Text>
          <Text style={styles.featureText}>Curated learning experiences</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => navigation.navigate('Schedule')}
        >
          <Icon name="schedule" size={32} color="#2C3E50" />
          <Text style={styles.featureTitle}>Schedule</Text>
          <Text style={styles.featureText}>Flexible class times</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.featureCard}
          onPress={() => navigation.navigate('Contact')}
        >
          <Icon name="contact-mail" size={32} color="#2C3E50" />
          <Text style={styles.featureTitle}>Contact</Text>
          <Text style={styles.featureText}>Begin your journey</Text>
        </TouchableOpacity>
      </View>

      <Card style={styles.testimonialCard}>
        <Card.Content>
          <Text style={styles.testimonialTitle}>Student Experience</Text>
          <Text style={styles.testimonialText}>
            "The elegance of the teaching approach makes learning Spanish feel effortless. Every session is thoughtfully crafted."
          </Text>
          <Text style={styles.testimonialAuthor}>— Alexandra M.</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#2C3E50',
    padding: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
    letterSpacing: 1,
    fontStyle: 'italic',
  },
  welcomeCard: {
    margin: 20,
    marginHorizontal: 24,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 8,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 12,
    color: '#2C3E50',
    letterSpacing: 1,
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#5A6C7D',
    letterSpacing: 0.5,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 4,
    color: '#2C3E50',
    letterSpacing: 1,
  },
  featureText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#5A6C7D',
    letterSpacing: 0.5,
    lineHeight: 18,
  },
  testimonialCard: {
    margin: 20,
    marginHorizontal: 24,
    backgroundColor: '#F8F8F8',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    borderRadius: 8,
  },
  testimonialTitle: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 12,
    color: '#2C3E50',
    letterSpacing: 1,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 26,
    color: '#5A6C7D',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C3E50',
    textAlign: 'right',
    letterSpacing: 1,
  },
});

export default HomeScreen;
