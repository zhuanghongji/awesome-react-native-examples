import React, { useEffect, useState } from 'react'
import { AccessibilityInfo, StyleSheet, Text, TextStyle } from 'react-native'
import { ExampleContainer } from '../../../components'

export const AccessibilityInfoScreen = () => {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false)
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false)

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(enabled =>
      setReduceMotionEnabled(enabled)
    )
    const subscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      enabled => setReduceMotionEnabled(enabled)
    )
    return () => subscription.remove()
  }, [])

  useEffect(() => {
    const subscription = AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      enabled => setScreenReaderEnabled(enabled)
    )
    AccessibilityInfo.isScreenReaderEnabled().then(enabled =>
      setScreenReaderEnabled(enabled)
    )
    return () => subscription.remove()
  }, [])

  return (
    <ExampleContainer>
      <Text style={styles.text}>
        The reduce motion is {reduceMotionEnabled ? 'enabled' : 'disabled'}
      </Text>
      <Text style={styles.text}>
        The screen reader is {screenReaderEnabled ? 'enabled' : 'disabled'}
      </Text>
    </ExampleContainer>
  )
}

type Styles = {
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  text: {
    color: '#333333',
    fontSize: 18,
    lineHeight: 48,
  },
})
