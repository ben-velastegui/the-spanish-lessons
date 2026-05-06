import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Alert } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialIcons';

const ContactScreen = ({ navigation }: any) => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:info@thespanishlessons.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+447912345678');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/the_spanish_lessons/');
  };

  const handleWebsitePress = () => {
    Linking.openURL('https://thespanishlessons.github.io');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Get in Touch</Text>
        <Text style={styles.subtitle}>Begin your elegant Spanish journey today</Text>
      </View>

      <Card style={styles.contactCard}>
        <Card.Content>
          <Text style={styles.contactTitle}>Contact Information</Text>
          
          <View style={styles.contactItem}>
            <Icon name="email" size={24} color="#2C3E50" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email</Text>
              <Button 
                mode="text" 
                onPress={handleEmailPress}
                style={styles.contactButton}
                labelStyle={styles.contactButtonText}
              >
                info@thespanishlessons.com
              </Button>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Icon name="phone" size={24} color="#2C3E50" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Button 
                mode="text" 
                onPress={handlePhonePress}
                style={styles.contactButton}
                labelStyle={styles.contactButtonText}
              >
                +44 7912 345 678
              </Button>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Icon name="language" size={24} color="#2C3E50" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Website</Text>
              <Button 
                mode="text" 
                onPress={handleWebsitePress}
                style={styles.contactButton}
                labelStyle={styles.contactButtonText}
              >
                thespanishlessons.github.io
              </Button>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Icon name="photo-camera" size={24} color="#2C3E50" />
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Instagram</Text>
              <Button 
                mode="text" 
                onPress={handleInstagramPress}
                style={styles.contactButton}
                labelStyle={styles.contactButtonText}
              >
                @the_spanish_lessons
              </Button>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content>
          <Text style={styles.infoTitle}>Complimentary Trial Lesson</Text>
          <Text style={styles.infoText}>
            Experience our refined teaching approach with a complimentary 30-minute trial session.
          </Text>
          <Button 
            mode="outlined" 
            style={styles.trialButton}
            onPress={handleEmailPress}
          >
            Book Trial Lesson
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content>
          <Text style={styles.infoTitle}>Office Hours</Text>
          <Text style={styles.infoText}>
            Monday - Friday: 9:00 AM - 6:00 PM
          </Text>
          <Text style={styles.infoText}>
            Saturday: 10:00 AM - 2:00 PM
          </Text>
          <Text style={styles.infoText}>
            Sunday: Closed
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.locationsCard}>
        <Card.Content>
          <Text style={styles.infoTitle}>Class Locations</Text>
          <Text style={styles.infoText}>
            <Text style={styles.locationTitle}>Gosforth:</Text> Community Centre, High Street
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.locationTitle}>Ponteland:</Text> Village Hall, Main Street
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.locationTitle}>Online:</Text> Via Zoom (link provided)
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
  contactCard: {
    margin: 20,
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
  contactTitle: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 20,
    color: '#2C3E50',
    letterSpacing: 1,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactInfo: {
    flex: 1,
    marginLeft: 16,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2C3E50',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  contactButton: {
    alignItems: 'flex-start',
    padding: 0,
  },
  contactButtonText: {
    color: '#2C3E50',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  infoCard: {
    margin: 20,
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
  infoTitle: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 12,
    color: '#2C3E50',
    letterSpacing: 1,
  },
  infoText: {
    fontSize: 16,
    color: '#5A6C7D',
    lineHeight: 24,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  trialButton: {
    borderColor: '#2C3E50',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 12,
  },
  locationsCard: {
    margin: 20,
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
  locationTitle: {
    fontWeight: '500',
    color: '#2C3E50',
  },
});

export default ContactScreen;
