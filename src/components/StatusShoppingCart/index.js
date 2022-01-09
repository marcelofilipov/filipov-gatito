import React from 'react';

import { Text, View } from 'react-native';

import ButtonCustom from '../Button';
import styles from './styles';

export default function StatusShoppingCart({ total }) {
  return <View style={styles.content}>
    <View style={styles.total}>
      <Text style={styles.description}>Total do Carrinho:</Text>
      <Text style={styles.valueTotal}>
        {
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(total)
        }
      </Text>
    </View>
    <View style={styles.button}>
      <ButtonCustom value='Concluir Pedido' inverted />
    </View>
  </View>
}