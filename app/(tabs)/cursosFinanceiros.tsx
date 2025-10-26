import React, { useState } from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet, Alert } from 'react-native';

// Novo tipo: img agora é uma string (URL)
interface Produto {
    id: string;
    nome: string;
    preco: string;
    img: string;
}

// Produtos com imagens de Unsplash
const produtos: Produto[] = [
    {
        id: '1',
        nome: 'Curso Básico',
        preco: 'R$ 400,00',
        img: 'https://plus.unsplash.com/premium_photo-1679923906308-c26a0e2ca510?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    },
    {
        id: '2',
        nome: 'Investimentos',
        preco: 'R$ 350,00',
        img: 'https://images.unsplash.com/photo-1629339941379-da30348cdba6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172',
    },
    {
        id: '3',
        nome: 'Orçamento',
        preco: 'R$ 220,00',
        img: 'https://plus.unsplash.com/premium_photo-1661661583168-659045108488?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    },
    {
        id: '4',
        nome: 'Poupança',
        preco: 'R$ 250,00',
        img: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    },
    {
        id: '5',
        nome: 'Bitcoins',
        preco: 'R$ 120,00',
        img: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172',
    },
    {
        id: '6',
        nome: 'Dívidas',
        preco: 'R$ 180,00',
        img: 'https://images.unsplash.com/photo-1605902711722-d3b91c3aa833?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '7',
        nome: 'Jovens',
        preco: 'R$ 220,00',
        img: 'https://images.unsplash.com/photo-1600267165323-6f6c9ef51a2e?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '8',
        nome: 'Avançado',
        preco: 'R$ 300,00',
        img: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80',
    },
];


export default function App() {
    const [carrinho, setCarrinho] = useState<Produto[]>([]);

    const adicionarAoCarrinho = (produto: Produto) => {
        setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
        Alert.alert("Produto Adicionado", `${produto.nome} foi adicionado ao carrinho!`);
    };

    const renderProduto = ({ item }: { item: Produto }) => (
        <View style={styles.produto}>
            <Image source={{ uri: item.img }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => adicionarAoCarrinho(item)} />
        </View>
    );

    return (
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
    nome: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
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
        fontWeight: '900',
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
        borderRadius: 8,
        resizeMode: 'cover',
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
