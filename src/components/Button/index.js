import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import functionStylesDefault from './styles';

export default function ButtonCustom({ small = false, inverted = false, value, action, styles }) {
  const stylesDefault = functionStylesDefault(small, inverted);

  return (
    <TouchableOpacity onPress={action} style={[stylesDefault.button, styles]}>
      <Text style={stylesDefault.value}>{value}</Text>
    </TouchableOpacity>
  );
}
