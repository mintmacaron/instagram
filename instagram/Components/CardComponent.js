import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';


class CardComponent extends Component{
    render(){
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/프사.jpg')} />
                        <Body>
                            <Text>김애용</Text>
                            <Text note>2019년 11월 6일</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Image source={require('../assets/이게되네.jpg')} style={{height:200, width:null, flex:1}}/>
                </CardItem>
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send' style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height:40}}>
                    <Text>좋아요 101개</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{fontWeight:'900'}}>Beomwoo</Text>
                        #인스타그램 #따라하기 #멋사7기파이팅
                    </Text>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})