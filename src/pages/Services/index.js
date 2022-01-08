import React from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'

const services = [
    {
        id: 1,
        nome: 'Banho',
        preco: 79.9,
        descricao: 'NÃO DÊ BANHO NO SEU GATO!'
    },
    {
        id: 2,
        nome: 'Vacina V4',
        preco: 89.9,
        descricao: 'Uma dose da vacina V4. Seu gato precisa de duas doses',
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: 'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano',
    },
]

export default function Services() {
    return (
        <SafeAreaView>
            <StatusBar />
            <Text>Serviços!</Text>
        </SafeAreaView>
    ) 
}