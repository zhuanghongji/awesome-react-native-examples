import React, { useEffect, useState } from 'react'
import {
  AccessibilityInfo,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

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
    <View style={styles.container}>
      <Text style={styles.text}>
        The reduce motion is {reduceMotionEnabled ? 'enabled' : 'disabled'}.
      </Text>
      <Text style={styles.text}>
        The screen reader is {screenReaderEnabled ? 'enabled' : 'disabled'}.
      </Text>
    </View>
  )
}

type Styles = {
  container: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#333333',
  },
})
