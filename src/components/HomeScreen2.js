import {
  Container,
  List,
  ListItem,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform
} from "react-native";
import React, { Component } from "react";
import { videos2 } from "../../mostplayed";

let vds = videos2.video1;
var url ="https://www.youtube.com/watch?v=RL4S9WuFxvw&feature=youtu.be";

VideoPlayer.showVideoPlayer(url);
export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
              </Button>

          </Left>
          <Body>
            <Title>YouVido App</Title>
          </Body>
          <Right />
        </Header>
        <Content>

          <Body>

               
              </Body>

        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>WeCodeNG</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
