import { ComponentType } from 'react'
import { ReactNativeSkiaStackParamList } from '../../common'
import { CanvasScreen } from './Canvas'
import { DiffRectScreen } from './DiffRect'
import { FitBoxScreen } from './FitBox'
import { GroupScreen } from './Group'
import { HelloWorldScreen } from './HelloWorld'
import { HelloWorldImperativeAPIScreen } from './HelloWorldImperativeAPI'
import { PaintScreen } from './Paint'
import { PathScreen } from './Path'
import { RectScreen } from './Rect'
import { RoundedRectScreen } from './RoundedRect'
import { HomeScreen } from './home'
import { LineScreen } from './Line'
import { PointsScreen } from './Points'
import { CircleScreen } from './Circle'
import { OvalScreen } from './Oval'

type RouteName = keyof ReactNativeSkiaStackParamList

type ScreenConfig = {
  [name in RouteName]: ComponentType<any>
}

export const SCREEN_CONFIGS: ScreenConfig = {
  ['react-native-skia']: HomeScreen,
  HelloWorld: HelloWorldScreen,
  HelloWorldImperativeAPI: HelloWorldImperativeAPIScreen,
  Canvas: CanvasScreen,
  Paint: PaintScreen,
  Group: GroupScreen,
  FitBox: FitBoxScreen,
  Path: PathScreen,
  Rect: RectScreen,
  RoundedRect: RoundedRectScreen,
  DiffRect: DiffRectScreen,
  Line: LineScreen,
  Points: PointsScreen,
  Circle: CircleScreen,
  Oval: OvalScreen,
}

export const ROUTE_NAMES = <RouteName[]>Object.keys(SCREEN_CONFIGS).filter(
  v => v !== 'react-native-skia'
) 
