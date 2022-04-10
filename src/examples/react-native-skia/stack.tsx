import React, { ComponentType } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ReactNativeSkiaStackParamList } from '../../common'
import { CanvasScreen } from './Canvas'
import { HelloWorldScreen } from './HelloWorld'
import { HelloWorldImperativeAPIScreen } from './HelloWorldImperativeAPI'
import { PaintScreen } from './Paint'
import { ReactNativeSkiaHomeScreen } from './home'

const Stack = createNativeStackNavigator()

type Config = {
  name: keyof ReactNativeSkiaStackParamList
  component: ComponentType<any>
}

const CONFIGS: Config[] = [
  {
    name: 'react-native-skia',
    component: ReactNativeSkiaHomeScreen,
  },
  {
    name: 'HelloWorld',
    component: HelloWorldScreen,
  },
  {
    name: 'HelloWorldImperativeAPI',
    component: HelloWorldImperativeAPIScreen,
  },
  {
    name: 'Canvas',
    component: CanvasScreen,
  },
  {
    name: 'Paint',
    component: PaintScreen,
  },
]

export const ReactNativeSkiaStack = () => {
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
