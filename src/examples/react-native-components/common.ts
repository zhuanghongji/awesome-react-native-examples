import { ComponentType } from 'react'
import { ReactNativeComponentsStackParamList } from '../../common'
import { ActivityIndicatorScreen } from './ActivityIndicator'
import { HomeScreen } from './home'

type RouteName = keyof ReactNativeComponentsStackParamList

type ScreenConfig = {
  [name in RouteName]: ComponentType<any>
}

export const SCREEN_CONFIGS: ScreenConfig = {
  ['React Native Components']: HomeScreen,
  ActivityIndicator: ActivityIndicatorScreen,
}

export const ROUTE_NAMES = <RouteName[]>Object.keys(SCREEN_CONFIGS).filter(
  v => v !== 'React Native Components'
) 
