import React from 'react'
import { Canvas, Fill, Shader, Skia, vec } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

const source = Skia.RuntimeEffect.Make(`
uniform vec2 c;
uniform float r;
uniform float blue;
 
vec4 main(vec2 pos) {
  vec2 normalized = pos/vec2(2 * r);
  return distance(pos, c) > r ? vec4(1) : vec4(normalized, blue, 1);
}`)!

export const ShaderUsingUniformsScreen = () => {
  const r = 128
  const c = vec(2 * r, r)
  const blue = 1.0
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ width: 256, height: 256 }}>
          <Fill>
            <Shader source={source} uniforms={{ c, r, blue }} />
          </Fill>
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
