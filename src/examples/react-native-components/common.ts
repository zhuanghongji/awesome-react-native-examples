import { ComponentType } from 'react'
import { ReactNativeComponentsStackParamList } from '../../common'
import { ActivityIndicatorScreen } from './ActivityIndicator'
import { HomeScreen } from './home'

type ScreenConfig = {
  name: keyof ReactNativeComponentsStackParamList
  component: ComponentType<any>
}

export const SCREEN_CONFIGS: ScreenConfig[] = [
  {
    name: 'React Native Components',
    component: HomeScreen,
  },
  {
    name: 'ActivityIndicator',
    component: ActivityIndicatorScreen,
  },
]

export const ROUTE_NAMES = SCREEN_CONFIGS.map(v => v.name).filter(
  (_, index) => index > 0
)
