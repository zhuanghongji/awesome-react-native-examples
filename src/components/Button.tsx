import React from 'react'
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

const { width: sw } = Dimensions.get('screen')

export type ButtonProps = {
  style?: StyleProp<ViewStyle>
  text: string
  onPress: () => void
}

export const Button = (props: ButtonProps) => {
  const { style, text, onPress } = props
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={1}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

type Styles = {
  container: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: sw - 40,
    height: 48,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#D6C3FF',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
})
