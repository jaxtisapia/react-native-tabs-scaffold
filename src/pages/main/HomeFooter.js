import React, {Component} from 'react'
import {Button, Footer, FooterTab, Icon} from "native-base";
import {Alert} from "react-native";

let homeTabs = require("../../constants/homeTabs").tabs;

export default class HoemFooter extends  Component{

    constructor(){
        super();

        this.state = {
            activeTab: "apps"
        };

        this.changeActiveTab = this.changeActiveTab.bind(this)
    }

    changeActiveTab = (string) => {
        this.setState({ activeTab: string });
        this.props.navigateTab(string);
    };

    render(){
        return (
            <Footer>
                <FooterTab>


                    <Button active={this.state.activeTab === homeTabs.apps.id} onPress={ () => this.changeActiveTab(homeTabs.apps.id) }>
                        <Icon active={this.state.activeTab === homeTabs.apps.id} name={homeTabs.apps.icon} />
                    </Button>

                    <Button active={this.state.activeTab === homeTabs.camera.id} onPress={ () => this.changeActiveTab(homeTabs.camera.id) }>
                        <Icon active={this.state.activeTab === homeTabs.camera.id} name={homeTabs.camera.icon} />
                    </Button>

                    <Button active={this.state.activeTab === homeTabs.navigate.id} onPress={ () => this.changeActiveTab(homeTabs.navigate.id) }>
                        <Icon active={this.state.activeTab === homeTabs.navigate.id} name={homeTabs.navigate.icon} />
                    </Button>

                </FooterTab>
            </Footer>
        )
    }

}