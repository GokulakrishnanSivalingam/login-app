import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './Register';
import Login from './Login';
const Tab = createBottomTabNavigator();
function Tap()
{
    return(
      
        <NavigationContainer>
      <Tab.Navigator>
    
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
     
  
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
  export default Tap
 