import React from 'react'
import { Canvas, Skia, TextPath } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

const circle = Skia.Path.Make()
circle.addCircle(128 + 30, 128 + 30, 128)

export const TextPathScreen = () => {
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <TextPath
            path={circle}
            text="Hello World - A B C D E F G H I J K L M N"
            familyName="helvetica"
            size={24}
          />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
