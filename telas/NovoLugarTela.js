import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, TextInput } from 'react-native';
import Cores from '../constantes/Cores';
import { useDispatch } from 'react-redux';

import * as lugaresActions from '../store/lugares-actions';

const NovoLugarTela = (props) => {

    const [novoLugar, setNovoLugar] = useState('');

    const dispatch = useDispatch();

    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto);
    }

    const adicionarLugar = () => {
        //console.log("Adicionando lugar...");
        dispatch(lugaresActions.addLugar(novoLugar));
        props.navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={estilos.form}>
                <Text style={estilos.titulo}>Novo lugar</Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={novoLugarAlterado}
                    value={novoLugar} />
                <Button
                    title="Salvar lugar"
                    color={Cores.primary}
                    onPress={adicionarLugar} />
            </View>
        </ScrollView>

    );
}

const estilos = StyleSheet.create({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4
    }
})

export default NovoLugarTela;