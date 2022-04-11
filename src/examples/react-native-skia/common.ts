import { ComponentType } from 'react'
import { ReactNativeSkiaStackParamList } from '../../common'
import { CanvasScreen } from './Canvas'
import { FitBoxScreen } from './FitBox'
import { GroupScreen } from './Group'
import { HelloWorldScreen } from './HelloWorld'
import { HelloWorldImperativeAPIScreen } from './HelloWorldImperativeAPI'
import { PaintScreen } from './Paint'
import { PathScreen } from './Path'
import { HomeScreen } from './home'

type RouteName = keyof ReactNativeSkiaStackParamList

type ScreenConfig = {
  name: RouteName
  component: ComponentType<any>
}

export const SCREEN_CONFIGS: ScreenConfig[] = [
  {
    name: 'react-native-skia',
    component: HomeScreen,
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
  {
    name: 'Group',
    component: GroupScreen,
  },
  {
    name: 'FitBox',
    component: FitBoxScreen,
  },
  {
    name: 'Path',
    component: PathScreen,
  },
]

export const ROUTE_NAMES = SCREEN_CONFIGS.map(v => v.name).filter(
  (_, index) => index > 0
)
