import React from 'react'

import { FlatList } from 'react-native'

import StatusShoppingCart from '../../components/StatusShoppingCart'
import Item from './Item'


const services = [
    {
        id: 1,
        nome: 'Banho',
        preco: 79.9,
        descricao: 'NÃO DÊ BANHO NO SEU GATO! Mas, precisando realizamos o serviço de banho',
        quantidade: 1
    },
    {
        id: 2,
        nome: 'Vacina V4',
        preco: 89.9,
        descricao: 'Uma dose da vacina V4. Seu gato precisa de duas doses',
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: 'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano',
        quantidade: 1
    },
]


export default function ShoppingCart() {
    const total = services.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0)
    return <>
        <StatusShoppingCart total={total}/>
        <FlatList
            data={services}
            removeClippedSubviews={false}
            renderItem={({item}) => <Item {...item} /> }
            keyExtractor={({id}) => String(id)}
        />
    </>
}