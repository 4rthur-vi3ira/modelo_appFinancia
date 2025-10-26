import React, { useState } from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet, Alert } from 'react-native';

// Define o tipo do produto
interface Produto {
    id: string;
    nome: string;
    preco: string;
    img: any;
}

const produtos: Produto[] = [
    { id: '1', nome: 'Produto 1', preco: 'R$ 400,00', img: require('../../assets/feminino/feminino1.jpg') },
    { id: '2', nome: 'Produto 2', preco: 'R$ 350,00', img: require('../../assets/feminino/feminino2.jpg') },
    { id: '3', nome: 'Produto 3', preco: 'R$ 220,00', img: require('../../assets/feminino/feminino3.jpg') },
    { id: '4', nome: 'Produto 4', preco: 'R$ 250,00', img: require('../../assets/feminino/feminino4.jpg') },
    { id: '5', nome: 'Produto 5', preco: 'R$ 120,00', img: require('../../assets/infantil/infantil.jpg') },
    { id: '6', nome: 'Produto 6', preco: 'R$ 180,00', img: require('../../assets/infantil/infantil2.jpg') },
    { id: '7', nome: 'Produto 7', preco: 'R$ 220,00', img: require('../../assets/infantil/infantil3.jpg') },
    { id: '8', nome: 'Produto 8', preco: 'R$ 300,00', img: require('../../assets/infantil/infantil2.jpg') },
];


export default function App() {
    const [carrinho, setCarrinho] = useState<Produto[]>([]); // Estado tipado para carrinho

    const adicionarAoCarrinho = (produto: Produto) => { // Tipo explícito para produto
        setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
        Alert.alert("Produto Adicionado", `${produto.nome} foi adicionado ao carrinho!`);
    };

    const renderProduto = ({ item }: { item: Produto }) => (
        <View style={styles.produto}>
       
            <Image source={item.img} style={styles.imagem} />

            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => adicionarAoCarrinho(item)} />
        </View>
    );

    return (
        // Windowns + . Para emoji
        <View style={styles.container}>
            <Text style={styles.titulo}>Loja de Cursos Financeiros 💶</Text>
            <FlatList
                data={produtos}
                renderItem={renderProduto}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
            <View style={styles.rodape}>
                <Text style={styles.carrinhoText}>Produtos no Carrinho: {carrinho.length}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    nome:{
        color:'red',
        fontSize: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgb(7, 53, 93)',
    },
    titulo: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight:'900',
    },
    produto: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        flex: 1,
        alignItems: 'center',
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    preco: {
        fontSize: 18,
        color: 'rgb(7, 53, 93)',
    },
    rodape: {
        marginTop: 20,
        alignItems: 'center',
    },
    carrinhoText: {
        color: 'white',
    },
    row: {
        justifyContent: 'space-between',
    },
});
