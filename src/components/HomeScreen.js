
import { Container,List, ListItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Text,View,StyleSheet} from 'react-native';
import React, { Component } from 'react';
import {videos } from '../../mostplayed';

import VideoPlayer from 'react-native-video-controls';
 


export default class HomeScreen extends Component {

    render(){
 var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
      
    return(
<Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' /></Button>
                     
                    </Left>
                    <Body>
                        <Title>YouVido App</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                   <List dataArray={videos}
                        renderRow={(item) =>
                            <ListItem>
                                
                             <Body> 
    <VideoPlayer  resizeMode={ 'contain' }  source={{ uri: item.video }} paused={true} title={item.artist}  navigator={ this.props.navigator }/></Body>
 
   
                            </ListItem>
                        }>
                    </List>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>WeCodeNG</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>);
    }
}
