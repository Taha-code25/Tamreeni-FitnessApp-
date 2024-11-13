import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import Account from '../screens/Account/Account';
import SignIN from '../screens/SignIn/SignIN';
import GetStarted from '../screens/GetStarted/GetStarted';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Otp from '../screens/Otp/Otp';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import Terms from '../screens/Terms&Conditions/Terms';
import PrivacyPolicy from '../screens/PrivacyPolicy/PrivacyPolicy';
import SignUp from '../screens/SignUp/SignUp';
import Profile from '../screens/ProfileSetup/Profile';
import Q1 from '../screens/Questionannaires/Q1';
enableScreens();

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Account">
        <Stack.Screen
          options={{headerShown: false}}
          name="Account"
          component={Account}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="GetStarted"
          component={GetStarted}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignIN}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Otp"
          component={Otp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ResetPassword"
          component={ResetPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TermsAndConditions"
          component={Terms}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PrivacyPolicy"
          component={PrivacyPolicy}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProfileSetup"
          component={Profile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Questionnaire"
          component={Q1}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
