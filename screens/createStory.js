import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image,Platform,StatusBar,SafeAreaView,TextInput } from 'react-native'
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {RFValue} from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
let customFonts={'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')}


export default class CreateStory extends React.Component {
  constructor(props){
    super(props)
    this.state={
      fontsLoaded:false,
      previewImage:"image_1",
      dropdownHeight:40
    }
  }
  async loadFontsAsync(){
    await Font.loadAsync(customFonts)
    this.setState({fontsLoaded:true})
  }
  componentDidMount(){
    this.loadFontsAsync()
  }
  render() {
    if(!this.state.fontsLoaded){
      return <AppLoading/>
    }else{
      let preview_images={
        "image_1":require("../assets/story_image_1.png"),
        "image_2":require("../assets/story_image_2.png"),
        "image_3":require("../assets/story_image_3.png"),
        "image_4":require("../assets/story_image_4.png"),
        "image_5":require("../assets/story_image_5.png")
        
      }
      
    
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
            <View style={styles.fieldsContainer}>
              <ScrollView>
                <Image source={preview_images[this.state.previewImage]} style={styles.previewImage}/>
                <View style={{height:RFValue(this.state.dropdownHeight)}}>
                  <DropDownPicker items={[{label:"image 1", value:"image_1"},
                {label:"image 2", value:"image_2"},
                {label:"image 3", value:"image_3"},
                {label:"image 4", value:"image_4"},
                {label:"image 5", value:"image_5"}
                ]}
                defaultValue={this.state.previewImage}
                conatinerStyle={{height:40,borderRadius:20,marginBottom:10}}
                onOpen={()=>{
                  this.setState({dropdownHeight:170})
                }}
                onClose={()=>{
                  this.setState({dropdownHeight:40})
                }}
                style={{backgroundColor:"transparent"}}
                itemStyle={{justifyContent:"flex-start"}}
                dropDownStyle={{backgroundColor:"#2f345d"}}
                labelStyle={{color:"white", fontFamily:"Bubblegum-Sans"}}
                arrowStyle={{color:"white", fontFamily:"Bubblegum-Sans"}}
                onChangeItem={item=>{
                  this.setState({previewImage:item.value})
                }}
                >
               

                  </DropDownPicker>

                </View>
                <TextInput
                style={styles.inputFont}
                onChangeText={title => this.setState({ title })}
                placeholder={"Title"}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={description => this.setState({ description })}
                placeholder={"Description"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={story => this.setState({ story })}
                placeholder={"Story"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={moral => this.setState({ moral })}
                placeholder={"Moral of the story"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              </ScrollView>

            </View>
      <View style={{flex:0.08}}/>
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
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  }
});