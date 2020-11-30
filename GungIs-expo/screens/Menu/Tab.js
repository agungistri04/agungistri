import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import screens from './btn';

const Tab = createBottomTabNavigator();

const TabScreen = () => (
  <Tab.Navigator
    Name="Home"
    tabBarOptions={{
      labelStyle: {
        marginBottom: 6,
      },
    }}>
    {screens.map((screen) => (
      <Tab.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name={screen.icon}
              size={size}
              color={color}
            />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default TabScreen;
