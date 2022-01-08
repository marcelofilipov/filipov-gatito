import React, { useState } from "react"

import { Button, Text, TextInput, View } from 'react-native'
import FieldInt from "../../../components/FieldInt"
import styles from "./styles"


export default function Item({nome, preco, descricao}) {
    const [amount, setAmount] = useState(1)

    return <>
        <View style={styles.information}>
            <Text style={styles.name}>{ nome }</Text>
            <Text style={styles.description}>{ descricao }</Text>
            <Text style={styles.price}>{ preco }</Text>
        </View>
        <View style={styles.shoppingCart}>
            <View>
                <View style={styles.value}>
                    <Text style={styles.description}>Quantidade: </Text>
                    <FieldInt valueInt={amount} action={setAmount} />
                </View>
                <View style={styles.value}>
                    <Text style={styles.description}>Quantidade: </Text>
                    <Text style={styles.price}>0</Text>
                </View>
            </View>
            <Button title='Adicionar'></Button>
        </View>
        <View style={styles.divider} />
    </>
}