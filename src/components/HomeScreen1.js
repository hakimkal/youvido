
import { Container,List, ListItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Text} from 'react-native';
import React, { Component } from 'react';
export default class HomeScreen extends Component {
    
    render(){

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
                    <List>
                        <ListItem >
                            <Text>Simon Mignolet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
  <ListItem >
                            <Text>Simon Mignolet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>

                          <ListItem >
                            <Text>Simon Mignolet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>

                          <ListItem >
                            <Text>Simon Mignolet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
                          <ListItem >
                            <Text>Simon Mignolet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
                        
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
