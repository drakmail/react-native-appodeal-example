import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import Appodeal from 'react-native-appodeal'

const Button = ({ action, children }) => (
  <TouchableOpacity onPress={action}>
    <Text style={styles.button}>{children}</Text>
  </TouchableOpacity>
)

export default class App extends React.Component {
  componentWillMount () {
    Appodeal.setTesting(true)
    Appodeal.disableNetwork('inmobi')
    Appodeal.init('6ed531b0a72a393f6a68e36c31200eaf1cf45dd1497bedfb')

    Appodeal.setAge(18)
    // Appodeal.setBirthday('17/06/1990')
    Appodeal.setEmail('spam@youmeapp.ru')
    Appodeal.setInterests('testing, react-native, android')
    Appodeal.setRelation('dating') // dating / engaged / married / searching / single / other
    Appodeal.setGender('female') // female / male / other
    Appodeal.setAlcohol('positive') // positive / negative / neutral
    Appodeal.setSmoking('positive') // positive / negative / neutral

    this.hideBanner()
  }

  showBannerBottom () {
    Appodeal.showBannerBottom()
  }

  showBannerTop () {
    Appodeal.showBannerTop()
  }

  hideBanner () {
    Appodeal.hideBanner()
  }

  showInterstitial () {
    Appodeal.isInterstitialLoaded(result => console.log('Interstitial loaded: ', result))
    Appodeal.showInterstitial()
  }

  showSkippableVideo () {
    Appodeal.isSkippableVideoLoaded(result => console.log('Skippable video loaded: ', result))
    Appodeal.showSkippableVideo()
  }

  showRewardedVideo () {
    Appodeal.isRewardedVideoLoaded(result => console.log('Rewarded video loaded: ', result))
    Appodeal.showRewardedVideo()
  }

  render() {
    return (
      <View style={styles.container}>
        <Button action={this.showBannerTop}>showBannerTop</Button>
        <Button action={this.showBannerBottom}>showBannerBottom</Button>
        <Button action={this.showInterstitial}>showInterstitial</Button>
        <Button action={this.showSkippableVideo}>showSkippableVideo</Button>
        <Button action={this.showRewardedVideo}>showRewardedVideo</Button>

        <Button action={this.hideBanner}>hideBanner</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 12,
    backgroundColor: '#eaeaea',
    borderRadius: 24,
    minWidth: 200,
    marginBottom: 12,
    textAlign: 'center'
  }
})
