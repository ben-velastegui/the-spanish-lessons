# Spanish Lessons Mobile App

A React Native mobile app for The Spanish Lessons platform, complementing the existing website with mobile-friendly features.

## Features

- **Home Screen**: Welcome message and quick access to main features
- **Courses**: Browse available Spanish courses with details and enrollment options
- **Schedule**: View weekly class times and locations
- **Contact**: Get in touch with instructors and book trial lessons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Expo CLI
- iOS Simulator (for iOS development) or Android Emulator (for Android development)

### Installation

1. Clone this repository
2. Navigate to the app directory:
   ```bash
   cd app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm start
   ```

2. Run on your preferred platform:
   - **iOS**: Press `i` in the terminal or run `npm run ios`
   - **Android**: Press `a` in the terminal or run `npm run android`
   - **Web**: Press `w` in the terminal or run `npm run web`

## App Structure

```
src/
├── screens/
│   ├── HomeScreen.tsx      # Main landing page
│   ├── CoursesScreen.tsx    # Course listings and details
│   ├── ScheduleScreen.tsx   # Class schedule and locations
│   └── ContactScreen.tsx    # Contact information and booking
```

## Technologies Used

- **React Native** with **Expo** for cross-platform mobile development
- **React Navigation** for screen navigation
- **React Native Paper** for UI components
- **TypeScript** for type safety

## Design

The app follows a clean, modern design with:
- Red accent color (#e74c3c) matching the website branding
- Card-based layouts for easy content scanning
- Touch-friendly buttons and navigation
- Responsive design for various screen sizes

## Future Enhancements

- User authentication and profiles
- Progress tracking and lesson materials
- Push notifications for class reminders
- In-app messaging with instructors
- Payment processing for course enrollment

## Deployment

The app can be deployed to:
- **App Store** (iOS)
- **Google Play Store** (Android)
- **Expo Go** for easy testing and sharing

## Contributing

This app is designed to be a foundation that can be built upon with additional features and functionality as needed.
