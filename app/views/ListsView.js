/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Icon, Tab, Tabs } from 'native-base';
import {
  TabView,
  TabNavigator
} from 'react-navigation';

import ShoppingListView from './ShoppingListView';
import InventoryListView from './InventoryListView';

export default class ListsView extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{height: 10, backgroundColor: '#F2487A'}}/>
        <Tabs
          tabBarUnderlineStyle={{backgroundColor: 'white'}}
          tabBarBackgroundColor='#F2487A'
        >
          <Tab
            heading="Shopping List"
            tabStyle={{backgroundColor: '#F2487A'}}
            activeTabStyle={{backgroundColor: '#F2487A'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
          >
            <ShoppingListView/>
          </Tab>
          <Tab
            heading="Inventory List"
            tabStyle={{backgroundColor: '#F2487A'}}
            activeTabStyle={{backgroundColor: '#F2487A'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
          >
            <InventoryListView navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
