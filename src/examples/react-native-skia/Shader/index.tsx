import React from 'react'
import { Canvas, Fill, Shader, Skia } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

const source = Skia.RuntimeEffect.Make(`
vec4 main(vec2 pos) {
  // normalized x,y values go from 0 to 1, the canvas is 256x256
  vec2 normalized = pos/vec2(256);
  return vec4(normalized.x, normalized.y, 0.5, 1);
}`)!

export const ShaderScreen = () => {
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ width: 256, height: 256 }}>
          <Fill>
            <Shader source={source} />
          </Fill>
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
