import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,SafeAreaView,Platform,StatusBar,FlatList,Image } from 'react-native'
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {RFValue} from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
let customFonts={'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')}
let stories=require("./temp_stories.json");
import StoryCard from "./storyCard";


export default class FeedScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      fontsLoaded:false
    }
  }
  async loadFontsAsync(){
    await Font.loadAsync(customFonts)
    this.setState({fontsLoaded:true})
  }
  componentDidMount(){
    this.loadFontsAsync()
  }
  renderItem=({item:story})=>{
    return <StoryCard story={story} navigation={this.props.navigation}/>
    
  }
  render() {
    if(!this.state.fontsLoaded){
      return <AppLoading/>
    }
    else{
    return (
        <View style={styles.container}>
          <SafeAreaView style={styles.androidSafeArea}/>
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image source={require("../assets/logo.png")} style={{ width: 60, height: 60, resizeMode: 'contain', marginLeft: 10 }}></Image>
              
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>story telling app</Text>
              
            </View>
            
            </View>
            <View style={styles.cardContainer}>
              <FlatList data={stories} keyExtractor={(item,index)=>{
                index.toString()
              }} renderItem={this.renderItem}/>

              

            </View>

      </View>
    );
  }
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});