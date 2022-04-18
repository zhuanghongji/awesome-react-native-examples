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
import { VerticesScreen } from './Vertices'
import { VerticesUsingIndicesScreen } from './VerticesUsingIndices'
import { PatchScreen } from './Patch'
import { BoxScreen } from './Box'
import { ImageScreen } from './Image'
import { ImageSVGScreen } from './ImageSVG'
import { ImageSVGMakeFromStringScreen } from './ImageSVGMakeFromString'
import { TextScreen } from './Text'
import { GlyphsScreen } from './Glyphs'
import { TextPathScreen } from './TextPath'
import { TextBlobScreen } from './TextBlob'
import { ShaderScreen } from './Shader'

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
  Vertices: VerticesScreen,
  VerticesUsingIndices: VerticesUsingIndicesScreen,
  Patch: PatchScreen,
  Box: BoxScreen,
  Image: ImageScreen,
  ImageSVG: ImageSVGScreen,
  ImageSVGMakeFromString: ImageSVGMakeFromStringScreen,
  Text: TextScreen,
  Glyphs: GlyphsScreen,
  TextPath: TextPathScreen,
  TextBlob: TextBlobScreen,
  Shader: ShaderScreen,
}

export const ROUTE_NAMES = <RouteName[]>Object.keys(SCREEN_CONFIGS).filter(
  v => v !== 'react-native-skia'
) 
