import React from "react"

import { TextInput } from "react-native"

export default function FieldInt({ valueInt, action }) {
    const numberInText = String(valueInt)
    return <TextInput
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(newValue) => {action(newValue)}}
        value={numberInText}
    />
}