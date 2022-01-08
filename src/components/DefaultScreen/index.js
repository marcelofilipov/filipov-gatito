import React from 'react';

import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from 'react-native'
import stylesGlobal from '../../styles'

//import styles from './styles'

export default function DefaultScreen({ children }) {
  return <SafeAreaView style={stylesGlobal.fill}>
    <StatusBar />
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={stylesGlobal.fill}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
}