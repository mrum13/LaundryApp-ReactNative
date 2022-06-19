import { Dimensions, ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {HeaderBackground, LogoHome} from '../../assets'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={HeaderBackground} style={styles.headerBackground}>
        <Image source={LogoHome} style={styles.logoHomeStyle} />
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang, </Text>
          <Text style={styles.username}>Rum</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  headerBackground: {
    width: windowWidth,
    height: windowHeight*0.30,
    paddingLeft: 36,
    paddingTop: 10,
  },
  logoHomeStyle: {
    width: windowWidth*0.25,
    height: windowHeight*0.06
  },
  hello: {
    marginTop: windowHeight*0.02
  },
  selamat: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular'
  },
  username: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  }
})