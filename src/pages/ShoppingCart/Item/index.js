import React, { useState } from "react"

import { Text, View } from 'react-native'

import ButtonCustom from "../../../components/Button"
import FieldInt from "../../../components/FieldInt"

import styles from "./styles"


export default function Item({nome, preco, descricao, quantidade: quantidadeInicial}) {
    const [amount, setAmount] = useState(quantidadeInicial)
    const [total, setTotal] = useState(preco * quantidadeInicial)

    const updateAmountTotal = (newAmount) => {
        setAmount(newAmount)
        calculateTotal(newAmount)
    }

    const calculateTotal = (amount) => {
        setTotal(amount * preco)
    }


    return <>
        <View style={styles.information}>
            <Text style={styles.name}>{ nome }</Text>
            <Text style={styles.description}>{ descricao }</Text>
            <Text style={styles.price}>{
             Intl.NumberFormat('pt-BR', {
                 style: 'currency', currency: 'BRL'
             }).format(preco)
            }</Text>
        </View>
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
            <ButtonCustom value='Remover do carrinho' action={() => {}}></ButtonCustom>
        </View>
        <View style={styles.divider} />
    </>
}