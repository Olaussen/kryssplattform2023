// App.tsx
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

const LocationDisplay: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const fetchLocation = async () => 
  {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    setLocation(location);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {location ? (
        <>
          <Text>Latitude: {location.coords.latitude}</Text>
          <Text>Longitude: {location.coords.longitude}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default LocationDisplay;