import { ComponentType } from 'react'
import { ReactNativeApisStackParamList } from '../../common'
import { AccessibilityInfoScreen } from './AccessibilityInfo'
import { HomeScreen } from './home'

type RouteName = keyof ReactNativeApisStackParamList

type ScreenConfig = {
  [name in RouteName]: ComponentType<any>
}

export const SCREEN_CONFIGS: ScreenConfig = {
  ['React Native Apis']: HomeScreen,
  AccessibilityInfo: AccessibilityInfoScreen,
}

export const ROUTE_NAMES = <RouteName[]>Object.keys(SCREEN_CONFIGS).filter(
  v => v !== 'React Native Apis'
) 

