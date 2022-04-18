import React from 'react'
import { Canvas, ImageSVG, useSVG } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const ImageSVGScreen = () => {
  // Alternatively, you can pass an SVG URL directly
  // for instance: const svg = useSVG("https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg");
  const svg = useSVG(require('../assets/tiger.svg'))

  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          {svg && <ImageSVG svg={svg} x={0} y={0} width={256} height={256} />}
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
