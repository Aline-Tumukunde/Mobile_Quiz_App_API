import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {apis} from '../store/apis';
import {useDispatch} from 'react-redux';
import {UnknownAction} from '@reduxjs/toolkit';
import {Text, TouchableOpacity, View} from 'react-native';
import {mainTitle, regularText, userProfileContainer} from '../assets/styles';
import {useLocalStorage} from '../constants/config';

const UserProfile: React.FC<any> = ({navigation, ...props}) => {
  const dispatch = useDispatch();
  const [data, setData] = useLocalStorage('role');
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={userProfileContainer}>
          <Text style={[mainTitle, {color:"#ffffff"}]}>{data}</Text>
          {data === 'admin' && (
            <TouchableOpacity onPress={() => navigation.navigate('ManageQuiz')}>
              <Text style={[regularText, {marginVertical: 5, color:"#ffffff"}]}>Quizzes</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={[regularText, {marginVertical: 20, color:"#ffffff"}]}>Home</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          borderTopColor: '#dedede',
          borderTopWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          backgroundColor:"#219ebc"
        }}
        onPress={() => dispatch(apis.logout() as unknown as UnknownAction)}>
        <Text style={[regularText,{color:"red", fontSize:22}]}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
