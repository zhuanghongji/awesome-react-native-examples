import React from 'react'
import {
  FlatList,
  StatusBar,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../common'
import { Button } from '../components/Button'
import { Divider } from '../components/Divider'

export type RouteName = keyof RootStackParamList

export type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Awesome React Native Examples'
>

const NAMES: RouteName[] = ['React Native Apis ', 'React Native Components ']

export const HomeScreen = ({ navigation, route }: ScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <FlatList
        data={NAMES}
        ListHeaderComponent={<Divider />}
        ListFooterComponent={<Divider />}
        keyExtractor={(item, index) => `${index}_${item}`}
        renderItem={({ item }) => {
          return <Button text={item} onPress={() => navigation.push(item)} />
        }}
        ItemSeparatorComponent={() => <Divider />}
      />
    </SafeAreaView>
  )
}

type Styles = {
  container: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  text: {
    color: '#333333',
  },
})
