const React = require("react-native");
const { StyleSheet, Platform,Dimensions } = React;
const screenWidth = Dimensions.get('window').width; 
const { width, height } = Dimensions.get('window');

export default {

  Container: {
    backgroundColor: '#ffffff',
  },
  header_text : {
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
    alignSelf: 'center',
    justifyContent: 'center',
  },
  padding_10: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  contnet_padding:{
    padding: 30,
  },

  contnet_padding_20:{
    padding: 20,
  },
  price:{
    color: "#59b964",
    fontSize: 24,
    marginTop: 20,
    textAlign: "center",
    alignSelf: 'stretch',
  },

  description:{
    color: "#b8bbb9",
    fontSize: 16,
    textAlign: "center",
    alignSelf: 'stretch',
  },

  count:{
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    alignSelf: 'stretch',
  },

  topSection: {
    height: 150,
    width: width,
  },

  BottomSection: {
    height: height-150,
    width: width,
  },

  map: {
    height: height-150,
    width: width,
  },







  Card_margin_border: {
    marginBottom: 15,
  },
  fs_18_center: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  headline:{
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000",
    alignSelf: 'stretch',
  },
  link_color:{
    color: "#0000ff",
  },
  time:{
    color: "#000000",
    fontSize: 15,
  },
  search_block:{ 
    borderWidth: 1,
    height:50, 
    width:screenWidth-20,
    borderColor:'rgb(241, 241, 241)',
    borderRadius:5,
    backgroundColor:"#ffffff",
    borderStyle: "solid",
    justifyContent:'center',
    marginTop:10,
    fontFamily: "Avenir",
    fontSize: 15,
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#0000ff",
    position:'relative',
    marginLeft:10,
    paddingLeft:10

   },
    search_text : {
    fontFamily: "Avenir",
    fontSize: 14,
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#0000ff",
    justifyContent:'center',
},

};
