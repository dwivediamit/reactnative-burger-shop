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
  List,
  ListItem,
  Label,
} from "native-base";

//======Import Stylesheet
import styles from "../css/style";
// import Icon from 'react-native-vector-icons/Feather'; 
import Icon from 'react-native-vector-icons/Entypo'; 


const burger = require("../img/burger.png");
const { width, height } = Dimensions.get('window');

const datas = [
  {
    img: burger,
    text: "Wayback Burger",
    note: "$12"
  },
  {
    img: burger,
    text: "Double Bacon Burger",
    note: "$14"
  },
  {
    img: burger,
    text: "Big Tomato Burger",
    note: "$10"
  },
  {
    img: burger,
    text: "Wayback Burger",
    note: "$12"
  },
  {
    img: burger,
    text: "Double Bacon Burger",
    note: "$14"
  },
  {
    img: burger,
    text: "Big Tomato Burger",
    note: "$10"
  },
  {
    img: burger,
    text: "Wayback Burger",
    note: "$12"
  },
  {
    img: burger,
    text: "Double Bacon Burger",
    note: "$14"
  },
  {
    img: burger,
    text: "Big Tomato Burger",
    note: "$10"
  }
];

class Order extends React.Component{
constructor(){
    super()
    this.state ={
      
    }
    
  }

  render(){
    return (
        <Container style={styles.Container}>
          <Header style={{backgroundColor:"#59b964"}} androidStatusBarColor="#59b964">
            <Left style={{flex:1}}>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
               <Icon color='white' name='chevron-left' size={25} /> 
              </Button>
            </Left>
            <Body style={{flex:2,alignItems:'center'}}>
              <Title style={styles.header_text}>Product</Title>
            </Body>
            <Right style={{flex:1}}>
              <Button transparent>
               <Icon color='white' name='shopping-cart' size={25} /> 
              </Button>
            </Right>
          </Header>

          <Content style={{paddingVertical: 20,}}>
            <List
              style={{marginLeft: 0}}
              dataArray={datas}
              renderRow={data =>
                <ListItem style={{marginLeft: 0}} onPress={() => this.props.navigation.navigate('Product')}>
                  <Left>
                    <Image
                      style={{
                        resizeMode: "contain",
                        width: null,
                        height: 100,
                        flex: 1
                      }}
                      source={data.img}
                    />
                  </Left>
                  <Body>
                    <Text numberOfLines={1}>
                      {data.text}
                    </Text>
                    <Text numberOfLines={1} style={{fontSize: 16, color: '#59b964'}}>
                      {data.note}
                    </Text>
                  </Body>
                </ListItem>}
            />
          </Content>
        </Container>
      );
  }
}
export default Order;