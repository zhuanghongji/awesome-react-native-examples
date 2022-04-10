import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN_CONFIGS } from './common'

const Stack = createNativeStackNavigator()

export const ReactNativeComponentsStack = () => {
  return (
    <Stack.Navigator>
      {SCREEN_CONFIGS.map(({ name, component }, index) => (
        <Stack.Screen
          key={`${index}_${name}`}
          name={name}
          component={component}
          options={{ animation: 'slide_from_right' }}
        />
      ))}
    </Stack.Navigator>
  )
}
