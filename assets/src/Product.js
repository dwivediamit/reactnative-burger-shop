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
} from "native-base";

//======Import Stylesheet
import styles from "../css/style";
// import Icon from 'react-native-vector-icons/Feather'; 
import Icon from 'react-native-vector-icons/Entypo'; 


const burger = require("../img/burger.png");
const { width, height } = Dimensions.get('window');

class Product extends React.Component{
constructor(props){
    super(props);
    this.state ={
      clicks: 0,
    }
    
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    if(this.state.clicks == 0){
      this.setState({ clicks: 0 });
    }else{
      this.setState({ clicks: this.state.clicks - 1 });
    }
  }

  render(){
    return (
        <Container style={styles.Container}>
          <Header style={{backgroundColor:"#59b964"}} androidStatusBarColor="#59b964">
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
               <Icon color='white' name='chevron-left' size={25} /> 
              </Button>
            </Left>
            <Body>
              <Title style={styles.header_text}>Wayback Burger</Title>
            </Body>
            <Left /> 
          </Header>

          <Content padder>
            <Card style={styles.contnet_padding} transparent>

              <CardItem cardBody>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: null,
                    height: 200,
                    flex: 1
                  }}
                  source={burger}
                />
              </CardItem>

              <CardItem style={{ paddingVertical: 0 }}>
                <Body>
                  <Text style={styles.price}>$12</Text>
                </Body>
              </CardItem>

              <CardItem style={{ paddingVertical: 0 }}>
                <Body>
                  <Text style={styles.description}>Classic old school burger with 2 paddys, lettuce and cheddar cheese</Text>
                </Body>
              </CardItem>

              <CardItem style={{ paddingVertical: 0 }}>
                <Grid>
                  <Col size={1} >
                    <Button transparent onPress={this.DecreaseItem}>
                      <Icon name="minus" color='#777777' size={25} />
                    </Button>
                  </Col>
                  <Col size={4} >
                    <Text style={[styles.count, {paddingTop: 10}]}>{ this.state.clicks }</Text>
                  </Col>
                  <Col size={1} >
                    <Button transparent onPress={this.IncrementItem}>
                      <Icon name="plus" color='#777777' size={25} />
                    </Button>
                  </Col>
                </Grid>
              </CardItem>

              <CardItem style={{ paddingVertical: 0 }}>
                <Body>
                  <Button rounded block success onPress={() => this.props.navigation.navigate('Order')}>
                    <Text>ADD TO CART</Text>
                  </Button>
                </Body>
              </CardItem>

            </Card>
          </Content>
        </Container>
      );
  }
}
export default Product;