import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Icon, Container, Content } from 'native-base';
import CardComponent from '../CardComponent';

class HomeTab extends Component{
    static navigationOptions ={
        tabBarIcon: ({ tintColor }) => (
            < Icon name='ios-home' style={{color:tintColor}}/>
        )
    }
    render(){
        return(
            <Container style = {style.container}>
                <Content>
                    <CardComponent/>
                </Content>
            </Container>
        );
    }
}

export default HomeTab;

const style = StyleSheet.create({
    containere: {
        flex: 1,
       backgroundColor: 'white'
    }
})