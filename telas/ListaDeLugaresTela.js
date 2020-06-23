import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import BotaoCabecalho from '../componentes/BotaoCabecalho';



const ListaDeLugaresTela = () => {
    return (
        <View>
            <Text>{'ListaDeLugaresTela'}</Text>
        </View>);
}

ListaDeLugaresTela.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Todos os lugares',
        headerRight:
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('NovoLugar') }}></Item>
            </HeaderButtons>
    };
}

export default ListaDeLugaresTela;