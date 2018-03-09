import React, {Component} from "react"
import {Body, Header, Title} from "native-base";

let homeTabs = require("../../constants/homeTabs").tabs;

export default class HomeHeader extends Component {
    constructor(props){
        super(props);

        this.setTitle = this.setTitle.bind(this);
    }

    setTitle(string){
        switch (string){

            case homeTabs.apps.id:
                return homeTabs.apps.title;
                break;

            case homeTabs.camera.id:
                return homeTabs.camera.title;
                break;

            case homeTabs.navigate.id:
                return homeTabs.navigate.title;
                break;

            default:
                return "Home";

        }
    }

    render(){

        return (
            <Header>
                <Body>

                <Title> { this.setTitle(this.props.activeTab) } </Title>

                </Body>
            </Header>
        )

    }

}