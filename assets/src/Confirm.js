import React from "react";
import { AppRegistry, Image, View, Alert, Linking, TouchableOpacity, Dimensions } from "react-native";
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Thumbnail,
  Title,
  Button,
  Grid,
  Col,
  Item,
  Input,
} from "native-base";

//======Import Stylesheet
import styles from "../css/style";
// import Icon from 'react-native-vector-icons/Feather'; 
import Icon from 'react-native-vector-icons/Entypo'; 
import MapView from 'react-native-maps';


const profile = require("../img/profile.jpg");
const { width, height } = Dimensions.get('window');

class Confirm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }



  render(){
    return (
        <Container style={styles.Container}>
          <Header style={{backgroundColor:"#59b964"}} androidStatusBarColor="#59b964">
            <Left >
              <Button transparent onPress={() => this.props.navigation.goBack()}>
               <Icon color='white' name='chevron-left' size={25} /> 
              </Button>
            </Left>
            <Body >
              <Title style={styles.header_text}>Order Confirmation</Title>
            </Body>
            <Left />
          </Header>

          <Content>
            <View style={[styles.topSection, styles.contnet_padding_20]}>
              <Text style={{textAlign: "center", fontSize: 18, alignSelf: 'center', marginBottom: 10}}>ORDER CONFIRMED </Text>
              <Text style={styles.description}>Our driver is on his way to collect your order and will deliver it to your home shortly!</Text>
            </View>

            <View style={styles.bottomSection}>
              <MapView style={styles.map} initialRegion={{
                 latitude:12.9610,
                 longitude:77.6387,
                 latitudeDelta: 1,
                 longitudeDelta: 1
                }}>
            
                {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
                   coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
                   title={"Your Location"}
                 />}

              </MapView>
            </View>
          </Content>
        </Container>
      );
  }
}
export default Confirm;