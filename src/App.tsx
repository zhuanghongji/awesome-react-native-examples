/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { ComponentType } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './common'
import { ReactNativeApisStack } from './examples/react-native-apis/stack'
import { ReactNativeComponentsStack } from './examples/react-native-components/stack'
import { ReactNativeSkiaStack } from './examples/react-native-skia/stack'
import { MainScreen } from './main'

const Stack = createNativeStackNavigator()

type Config = {
  name: keyof RootStackParamList
  component: ComponentType<any>
}

const CONFIGS: Config[] = [
  {
    name: 'Awesome React Native Examples',
    component: MainScreen,
  },
  {
    name: 'React Native Apis ',
    component: ReactNativeApisStack,
  },
  {
    name: 'React Native Components ',
    component: ReactNativeComponentsStack,
  },
  {
    name: 'react-native-skia ',
    component: ReactNativeSkiaStack,
  },
]

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {CONFIGS.map(({ name, component }, index) => (
          <Stack.Screen
            key={`${index}_${name}`}
            name={name}
            component={component}
            options={{
              headerShown: name === 'Awesome React Native Examples',
              animation: 'slide_from_right',
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
