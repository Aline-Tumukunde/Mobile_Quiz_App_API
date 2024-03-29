import React from 'react';
import {View, Text} from 'react-native';
import {
  bullet,
  container,
  noticationTitle,
  mainCard,
  notificationContent,
  notificationDate,
  notificationDescription,
} from '../assets/styles';
import Header from '../components/header';

const Notification: React.FC<any> = ({navigation}) => {
  return (
    <View style={container}>
      <Header onPress={() => navigation.goBack()} title="Notification" />
      <View style={mainCard}>
        <View style={bullet}></View>
        <View style={notificationContent}>
          <Text style={noticationTitle}>Quiz created</Text>
          <Text style={notificationDescription}>Quiz created on module 1</Text>
          <Text style={notificationDate}>March 16, 2024</Text>
        </View>
      </View>
      <View style={mainCard}>
        <View style={bullet}></View>
        <View style={notificationContent}>
        <Text style={noticationTitle}>Quiz created</Text>
          <Text style={notificationDescription}>Quiz created on module 1</Text>
          <Text style={notificationDate}>March 16, 2024</Text>
        </View>
      </View>
      <View style={mainCard}>
        <View style={bullet}></View>
        <View style={notificationContent}>
        <Text style={noticationTitle}>Quiz created</Text>
          <Text style={notificationDescription}>Quiz created on module 1</Text>
          <Text style={notificationDate}>March 16, 2024</Text>
        </View>
      </View>
      <View style={mainCard}>
        <View style={bullet}></View>
        <View style={notificationContent}>
        <Text style={noticationTitle}>Quiz created</Text>
          <Text style={notificationDescription}>Quiz created on module 1</Text>
          <Text style={notificationDate}>March 16, 2024</Text>
        </View>
      </View>
    </View>
  );
};

export default Notification;
