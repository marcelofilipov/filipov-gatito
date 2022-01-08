import React from "react"

import { TextInput } from "react-native"
import stylesDefault from './styles'

export default function FieldInt({ valueInt, action, styleParam }) {
    const update = (newValue, actionBack) => {
        const checkInt = newValue.match(/^[0-9]*$/)
        if (!checkInt) return

        const removeZeroLeft = newValue.replace(/^(0)(.+)/, '$2')

        actionBack(removeZeroLeft)
    }

    const numberInText = String(valueInt)
    
    return <TextInput
        style={[stylesDefault.field, styleParam]}
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(newValue) => {update(newValue, action)}}
        value={numberInText}
    />
}