import React, { ComponentType } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ReactNativeComponentsStackParamList } from '../../common'
import { ActivityIndicatorScreen } from './ActivityIndicator'
import { ReactNativeComponentsHomeScreen } from './home'

const Stack = createNativeStackNavigator()

type Config = {
  name: keyof ReactNativeComponentsStackParamList
  component: ComponentType<any>
}

const CONFIGS: Config[] = [
  {
    name: 'React Native Components',
    component: ReactNativeComponentsHomeScreen,
  },
  {
    name: 'ActivityIndicator',
    component: ActivityIndicatorScreen,
  },
]

export const ReactNativeComponentsStack = () => {
  return (
    <Stack.Navigator>
      {CONFIGS.map(({ name, component }, index) => (
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
