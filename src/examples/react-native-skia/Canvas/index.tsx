import React, { useEffect, useState } from 'react'
import { Dimensions, Image } from 'react-native'
import {
  Canvas,
  Circle,
  useCanvasRef,
  useTouchHandler,
  useValue,
} from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

const { width: sw } = Dimensions.get('screen')

export const CanvasScreen = () => {
  // the reference to `SkiaView` object
  const ref = useCanvasRef()

  const [snapshotBase64, setSnapshotBase64] = useState('')

  const r = sw / 2

  useEffect(() => {
    const timer = setTimeout(() => {
      const image = ref.current?.makeImageSnapshot()
      if (image) {
        setSnapshotBase64(image.encodeToBase64())
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const cx = useValue(100)
  const cy = useValue(100)
  const touchHandler = useTouchHandler({
    onActive: ({ x, y }) => {
      cx.current = x
      cy.current = y
    },
  })

  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas
          ref={ref}
          style={{ flex: 1 }}
          onTouch={touchHandler}
          onLayout={e => {
            // seems a bug of onLayout call now
            console.log('onLayout', e.nativeEvent.layout)
          }}
        >
          <Circle cx={r} cy={r} r={r} color="red" />
          {/* touch canvas area and the cyan circle move */}
          <Circle cx={cx} cy={cy} r={10} color="cyan" />
        </Canvas>
      </ExamplePlayground>

      {snapshotBase64 ? (
        <Image
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 48,
            height: 48,
            backgroundColor: 'black',
          }}
          source={{ uri: `data:image/png;base64,${snapshotBase64}` }}
        />
      ) : null}
    </ExampleContainer>
  )
}
