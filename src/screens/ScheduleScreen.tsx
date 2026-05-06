import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialIcons';

const schedule = [
  {
    day: 'Monday',
    location: 'Gosforth',
    sessions: ['18:00 beginners with some Spanish', '19:00 beginners from scratch'],
    icon: 'event',
  },
  {
    day: 'Wednesday',
    location: 'Ponteland',
    sessions: ['18:00 beginners', '19:00 basic conversation'],
    icon: 'event',
  },
  {
    day: 'Thursday',
    location: 'Online',
    sessions: ['17:00 children 5-8', '18:00 intermediate'],
    icon: 'laptop',
  },
];

const ScheduleScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Class Schedule</Text>
        <Text style={styles.subtitle}>Weekly sessions designed for your convenience</Text>
      </View>

      {schedule.map((day, index) => (
        <Card key={index} style={styles.scheduleCard}>
          <Card.Content>
            <View style={styles.dayHeader}>
              <Icon name={day.icon} size={24} color="#2C3E50" />
              <View style={styles.dayInfo}>
                <Text style={styles.dayTitle}>{day.day}</Text>
                <Text style={styles.location}>{day.location}</Text>
              </View>
            </View>
            
            <View style={styles.sessionsContainer}>
              {day.sessions.map((session, sessionIndex) => (
                <View key={sessionIndex} style={styles.sessionItem}>
                  <Icon name="schedule" size={16} color="#5A6C7D" />
                  <Text style={styles.sessionText}>{session}</Text>
                </View>
              ))}
            </View>
          </Card.Content>
        </Card>
      ))}

      <Card style={styles.infoCard}>
        <Card.Content>
          <View style={styles.infoHeader}>
            <Icon name="info" size={24} color="#2C3E50" />
            <Text style={styles.infoTitle}>Important Information</Text>
          </View>
          <Text style={styles.infoText}>
            • All classes are 1 hour in duration
          </Text>
          <Text style={styles.infoText}>
            • Maximum 8 students per class for personalized attention
          </Text>
          <Text style={styles.infoText}>
            • Complimentary trial lesson available
          </Text>
          <Text style={styles.infoText}>
            • Online classes conducted via Zoom
          </Text>
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
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
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
  scheduleCard: {
    margin: 15,
    marginHorizontal: 24,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dayInfo: {
    flex: 1,
    marginLeft: 16,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#2C3E50',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  location: {
    fontSize: 16,
    color: '#5A6C7D',
    letterSpacing: 0.5,
  },
  sessionsContainer: {
    paddingLeft: 40,
  },
  sessionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sessionText: {
    fontSize: 16,
    color: '#5A6C7D',
    marginLeft: 12,
    flex: 1,
    letterSpacing: 0.5,
  },
  infoCard: {
    margin: 15,
    marginHorizontal: 24,
    marginBottom: 30,
    backgroundColor: '#F8F8F8',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    borderRadius: 8,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#2C3E50',
    marginLeft: 12,
    letterSpacing: 1,
  },
  infoText: {
    fontSize: 16,
    color: '#5A6C7D',
    lineHeight: 24,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
});

export default ScheduleScreen;
