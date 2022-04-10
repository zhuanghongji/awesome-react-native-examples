import React, { ComponentType } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ReactNativeApisStackParamList } from '../../common'
import { AccessibilityInfoScreen } from './AccessibilityInfo'
import { ReactNativeApisHomeScreen } from './home'

const Stack = createNativeStackNavigator()

type Config = {
  name: keyof ReactNativeApisStackParamList
  component: ComponentType<any>
}

const CONFIGS: Config[] = [
  {
    name: 'React Native Apis',
    component: ReactNativeApisHomeScreen,
  },
  {
    name: 'AccessibilityInfo',
    component: AccessibilityInfoScreen,
  },
]

export const ReactNativeApisStack = () => {
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
