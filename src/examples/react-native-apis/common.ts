import { ComponentType } from 'react'
import { ReactNativeApisStackParamList } from '../../common'
import { AccessibilityInfoScreen } from './AccessibilityInfo'
import { HomeScreen } from './home'

type ScreenConfig = {
  name: keyof ReactNativeApisStackParamList
  component: ComponentType<any>
}

export const SCREEN_CONFIGS: ScreenConfig[] = [
  {
    name: 'React Native Apis',
    component: HomeScreen,
  },
  {
    name: 'AccessibilityInfo',
    component: AccessibilityInfoScreen,
  },
]

export const ROUTE_NAMES = SCREEN_CONFIGS.map(v => v.name).filter(
  (_, index) => index > 0
)
