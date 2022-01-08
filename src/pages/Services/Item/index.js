import React, { useState } from "react"

import { Text, TouchableOpacity, View } from 'react-native'

import ButtonCustom from "../../../components/Button"
import FieldInt from "../../../components/FieldInt"

import styles from "./styles"


export default function Item({nome, preco, descricao}) {
    const [amount, setAmount] = useState(1)
    const [total, setTotal] = useState(preco)
    const [expand, setExpand] = useState(false)

    const updateAmountTotal = (newAmount) => {
        setAmount(newAmount)
        calculateTotal(newAmount)
    }

    const calculateTotal = (amount) => {
        setTotal(amount * preco)
    }

    const invertExpand = () => {
        setExpand(!expand)
        updateAmountTotal(1)

    }

    return <>
        <TouchableOpacity style={styles.information} onPress={invertExpand}>
            <Text style={styles.name}>{ nome }</Text>
            <Text style={styles.description}>{ descricao }</Text>
            <Text style={styles.price}>{
             Intl.NumberFormat('pt-BR', {
                 style: 'currency', currency: 'BRL'
             }).format(preco)
            }</Text>
        </TouchableOpacity>
        {expand &&
            <View style={styles.shoppingCart}>
                <View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Quantidade: </Text>
                        <FieldInt styleParam={styles.amount} valueInt={amount} action={updateAmountTotal} />
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Total: </Text>
                        <Text style={styles.price}>{
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                            }).format(total)
                        }</Text>
                    </View>
                </View>
                <ButtonCustom value='Adicionar' action={() => {}}></ButtonCustom>
            </View>
        }
        <View style={styles.divider} />
    </>
}