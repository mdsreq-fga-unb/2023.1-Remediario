import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, Text } from 'react-native';

const BotaoSalvar = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>Salvar</Text>
    </TouchableOpacity>
  );
};

export default BotaoSalvar;