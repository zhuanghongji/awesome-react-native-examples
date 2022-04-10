import React from 'react'
import { Dimensions } from 'react-native'
import { Canvas, Circle, Group } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

const { width: sw } = Dimensions.get('screen')

export const HelloWorldScreen = () => {
  const width = sw
  const height = sw
  const r = sw * 0.32
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Group blendMode="multiply">
            <Circle cx={r} cy={r} r={r} color="cyan" />
            <Circle cx={width - r} cy={r} r={r} color="magenta" />
            <Circle cx={width / 2} cy={height - r} r={r} color="yellow" />
          </Group>
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
