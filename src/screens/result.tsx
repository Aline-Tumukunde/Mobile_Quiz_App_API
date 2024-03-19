import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../components/button';
import {answerCard, container, mainTitle, regularText} from '../assets/styles';
import { useLocalStorage } from '../constants/config';
import { SvgXml } from 'react-native-svg';
import { thumbsUp } from '../assets/svg/ThumbsUp';
import { thumbsdown } from '../assets/svg/ThumbsDown';

const Result: React.FC<any> = ({navigation, route}) => {
  const{counter} = route.params;
  const [data, setData] = useLocalStorage("answer");
  const marks = data?.filter((data:any)=> data.isCorrect === true)

  return (
    <View style={[container, {justifyContent:"center"}]}>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        You scored {marks?.length} of of {counter + 1}
      </Text>
      {
        data?.map((result: any, index:number)=>{
          return(
            <View key={index} style={[answerCard, {backgroundColor:result?.isCorrect? "#DAF4DE": "#FAEBED"}]}>
              <Text style={[regularText, {color:result?.isCorrect? "green": "red"}]}>{result.optionText}</Text>
              <SvgXml xml={result?.isCorrect? thumbsUp: thumbsdown} width={15} height={15}/>
            </View>
          )
        })
      }
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Back to the quizzes"
      />
    </View>
  );
};

export default Result;
