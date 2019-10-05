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


const card = require("../img/card.jpg");
const { width, height } = Dimensions.get('window');

class Payment extends React.Component{
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
              <Title style={styles.header_text}>Payment Details</Title>
            </Body>
            <Right style={{flex:1}}>
              <Button transparent>
               <Icon color='white' name='shopping-cart' size={25} /> 
              </Button>
            </Right>
          </Header>

          <Content padder>


            <Card style={styles.padding_10} transparent>

              <CardItem cardBody >
                <Image
                  style={{
                    resizeMode: "contain",
                    width: null,
                    height: 150,
                    flex: 1,
                    marginBottom: 25,
                  }}
                  source={card}
                />
              </CardItem>

              <CardItem style={{ paddingVertical: 0}}>
                <Body>
                  <Item regular style={{backgroundColor: '#f6f6f6', marginBottom: 20,}}>
                    <Input placeholder='Name' />
                  </Item>
                  <Item regular style={{backgroundColor: '#f6f6f6', marginBottom: 20,}}>
                    <Input placeholder='Card Number' />
                  </Item>
                  <Item regular style={{backgroundColor: '#f6f6f6', marginBottom: 20,}}>
                    <Input placeholder='Expiry Date' />
                  </Item>
                  <Item regular style={{backgroundColor: '#f6f6f6', marginBottom: 10,}}>
                    <Input placeholder='CCV' />
                  </Item>
                </Body>
              </CardItem>

              <CardItem style={{ paddingVertical: 0 }}>
                <Body>
                  <Button rounded block success onPress={() => this.props.navigation.navigate('Confirm')}>
                    <Text>PROCESS TO PAYMENT</Text>
                  </Button>
                </Body>
              </CardItem>

            </Card>
          </Content>
        </Container>
      );
  }
}
export default Payment;