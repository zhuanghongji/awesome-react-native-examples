import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN_CONFIGS } from './common'

const Stack = createNativeStackNavigator()

export const ReactNativeComponentsStack = () => {
  return (
    <Stack.Navigator>
      {Object.keys(SCREEN_CONFIGS).map((name, index) => {
        const component = SCREEN_CONFIGS[name]
        return (
          <Stack.Screen
            key={`${index}_${name}`}
            name={name}
            component={component}
            options={{ animation: 'slide_from_right' }}
          />
        )
      })}
    </Stack.Navigator>
  )
}
