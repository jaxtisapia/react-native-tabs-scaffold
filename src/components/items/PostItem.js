import React, {Component} from "react"
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Image} from "react-native";

export default class PostItem extends Component{
    render(){
        return(
        <Card style={{ marginLeft:10, marginRight: 10 }}>
            <CardItem cardBody>
                <Image source={{uri: 'https://lh3.googleusercontent.com/AKzJycDKkf1NlqDgGvDmoYrE9KNxbenHK2NgbDTWPp5bfaABULxWKJb62q7pVgSh6us'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            {/*<CardItem>*/}
                {/*<Left>*/}
                    {/*<Button transparent>*/}
                        {/*/!*<Icon active name="thumbs-up" />*!/*/}
                        {/*<Text>0 Likes</Text>*/}
                    {/*</Button>*/}
                {/*</Left>*/}
                {/*<Body>*/}
                {/*<Button transparent>*/}
                    {/*/!*<Icon active name="chatbubbles" />*!/*/}
                    {/*<Text>0 Comments</Text>*/}
                {/*</Button>*/}
                {/*</Body>*/}
                {/*<Right>*/}
                    {/*<Text>11h ago</Text>*/}
                {/*</Right>*/}
            {/*</CardItem>*/}
        </Card>
        )
    }
}