import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialIcons';

const courses = [
  {
    title: 'Beginner Spanish',
    description: 'Perfect for absolute beginners. Learn basic vocabulary, grammar, and conversation skills in an elegant learning environment.',
    difficulty: 'Beginner',
    duration: '8 weeks',
    icon: 'school',
  },
  {
    title: 'Intermediate Spanish',
    description: 'Take your Spanish to the next level with complex grammar and fluent conversation practice.',
    difficulty: 'Intermediate',
    duration: '12 weeks',
    icon: 'trending-up',
  },
  {
    title: 'Advanced Spanish',
    description: 'Refine your skills with advanced grammar, cultural nuances, and professional-level communication.',
    difficulty: 'Advanced',
    duration: '16 weeks',
    icon: 'star',
  },
  {
    title: 'Children\'s Spanish',
    description: 'Engaging lessons designed specifically for children with games, songs, and interactive activities.',
    difficulty: 'Beginner',
    duration: '10 weeks',
    icon: 'child-care',
  },
  {
    title: 'Private Lessons',
    description: 'Personalized instruction tailored to your specific goals and learning pace.',
    difficulty: 'All Levels',
    duration: 'Flexible',
    icon: 'person',
  },
  {
    title: 'Corporate Training',
    description: 'Professional language training for companies and organizations looking to expand globally.',
    difficulty: 'Intermediate',
    duration: 'Custom',
    icon: 'work',
  },
];

const CoursesScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Courses</Text>
        <Text style={styles.subtitle}>Curated learning experiences for every level</Text>
      </View>

      {courses.map((course, index) => (
        <Card key={index} style={styles.courseCard}>
          <Card.Content>
            <View style={styles.courseHeader}>
              <Icon name={course.icon} size={28} color="#2C3E50" />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <View style={styles.courseMeta}>
                  <Text style={styles.metaText}>{course.difficulty}</Text>
                  <Text style={styles.separator}>•</Text>
                  <Text style={styles.metaText}>{course.duration}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.courseDescription}>{course.description}</Text>
            <Button 
              mode="outlined" 
              style={styles.enrollButton}
              onPress={() => navigation.navigate('Contact')}
            >
              Enquire Now
            </Button>
          </Card.Content>
        </Card>
      ))}
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
  courseCard: {
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
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  courseInfo: {
    flex: 1,
    marginLeft: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2C3E50',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  courseMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 14,
    color: '#5A6C7D',
    letterSpacing: 0.5,
  },
  separator: {
    marginHorizontal: 12,
    color: '#5A6C7D',
    fontSize: 12,
  },
  courseDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5A6C7D',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  enrollButton: {
    borderColor: '#2C3E50',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default CoursesScreen;
