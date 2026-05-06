import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#2C3E50',
                elevation: 2,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: '300',
                fontSize: 18,
                letterSpacing: 2,
                textTransform: 'uppercase',
              },
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'The Spanish Lessons' }}
            />
            <Stack.Screen 
              name="Courses" 
              component={CoursesScreen} 
              options={{ title: 'Courses' }}
            />
            <Stack.Screen 
              name="Schedule" 
              component={ScheduleScreen} 
              options={{ title: 'Schedule' }}
            />
            <Stack.Screen 
              name="Contact" 
              component={ContactScreen} 
              options={{ title: 'Contact' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
