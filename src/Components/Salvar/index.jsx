import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, Text } from 'react-native';

const BotaoSalvar = () => {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}>Salvar</Text>
    </TouchableOpacity>
  );
};

export default BotaoSalvar;