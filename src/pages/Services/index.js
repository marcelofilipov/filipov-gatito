import React from 'react'

import { FlatList } from 'react-native'

import Item from './Item'


const services = [
    {
        id: 1,
        nome: 'Banho',
        preco: 79.9,
        descricao: 'NÃO DÊ BANHO NO SEU GATO! Mas, precisando realizamos o serviço de banho'
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
    return <>
        <FlatList
            data={services}
            removeClippedSubviews={false}
            renderItem={({item}) => <Item {...item} /> }
            keyExtractor={({id}) => String(id)}
        />
    </>
}