import React, {memo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {quizeCard, quizeTitle, regularText} from '../assets/styles';
import {SvgXml} from 'react-native-svg';
import {arrowRight} from '../assets/svg/arrow-right';

interface Props {
  onAddQuestion: () => void;
  onEditQuiz: () => void;
  onDeleteQiuz: () => void;
  title: string;
  id: number | string;
}

const ManageQuizCard: React.FC<Props> = ({
  onAddQuestion,
  onDeleteQiuz,
  title,
  onEditQuiz,
  id,
}) => {
  return (
    <View style={quizeCard}>
      <Text style={[quizeTitle, {padding: 0}]}>{title}</Text>
      <TouchableOpacity>
        <Text style={regularText} onPress={onEditQuiz}>
          Edit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDeleteQiuz}>
        <Text style={regularText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddQuestion}>
        <Text style={regularText}>Add question</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgXml xml={arrowRight} width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(
  ManageQuizCard,
  (prevProps, nextProps) => prevProps.id === nextProps.id,
);
