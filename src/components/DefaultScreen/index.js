import React from 'react';

import {
  KeyboardAvoidingView, Platform, SafeAreaView, StatusBar,
} from 'react-native';

import stylesGlobal, { colors } from '../../styles';
import styles from './styles';

export default function DefaultScreen({ children }) {
  return (
    <>
      <SafeAreaView style={styles.renderScreenTOP}>
        <StatusBar backgroundColor={colors.roxo} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={stylesGlobal.fill}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={styles.renderScreenFOOTER} />
    </>
  );
}
