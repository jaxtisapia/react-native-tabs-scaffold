import React, {Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Body, Title} from 'native-base';

let homeTabs = require("./src/constants/homeTabs").tabs;

import HomeFooter from "./src/pages/main/HomeFooter";
import PostItem from "./src/components/items/PostItem";
import FragmentPosts from "./src/pages/main/fragments/FragmentPosts";
import HomeHeader from "./src/pages/main/HomeHeader";
import {Alert} from "react-native";
import FragmentSettings from "./src/pages/main/fragments/FragmentSettings";
import FragmentExtras from "./src/pages/main/fragments/FragmentExtras";

export default class App extends Component {

    constructor(props){
        super(props);

        this.state ={
          activeTab: "apps"
        };

        this.navigateTab = this.navigateTab.bind(this);
        this.renderTab = this.renderTab.bind(this);
    }

    navigateTab(tabName){
        this.setState({ activeTab: tabName });
    }

    renderTab(){
        switch (this.state.activeTab){
            case homeTabs.apps.id:
                return <FragmentExtras/>;

            case homeTabs.camera.id:
                return <FragmentSettings/>;

            case homeTabs.navigate.id:
                return <FragmentSettings/>;

            default:
                return <FragmentExtras/>;
        }
    }

    render() {
        return (
            <Container>

                <HomeHeader activeTab={this.state.activeTab}/>

                <Content style={{backgroundColor: "#bdc3c7"}}>

                    { this.renderTab() }

                </Content>

                <HomeFooter navigateTab={this.navigateTab}/>

            </Container>
        );
    }
}