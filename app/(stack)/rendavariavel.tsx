import { Text, StyleSheet, View, ScrollView } from 'react-native';

// You can import supported modules from npm
//import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <>
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.box}>
          <Text style={styles.title}> O que é renda fixa </Text>
            <Text style={styles.text}>
              A renda fixa
              é uma opção de investimento segura e previsível, ideal para perfis
              conservadores. Inclui ativos como títulos públicos, CDBs, LCIs e
              LCAs, com regras de remuneração definidas. Oferece baixo risco e
              pode contar com a proteção do FGC até R$ 250 mil por instituição.
              Alguns investimentos têm liquidez diária, permitindo resgates
              rápidos. A rentabilidade pode ser prefixada, pós-fixada ou
              híbrida, conforme o objetivo do investidor. Prefixada garante
              retorno fixo; pós-fixada depende de índices como Selic ou CDI.
              Híbrida combina taxa fixa com variação de índice, como o IPCA. É
              essencial entender os prazos e a liquidez antes de investir. O
              Tesouro Direto é uma porta de entrada acessível para iniciantes.
              Com planejamento e disciplina, a renda fixa ajuda na construção de
              patrimônio. --- Se quiser, posso transformar esse resumo em um
              post para redes sociais ou uma explicação em vídeo!
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCFCF3',
    padding: 8,
  },
  container1: {
    flex: 1,
    backgroundColor: '#E6BB47',
    margin: 20,
    height: 700,
    borderRadius: 20,
    alignItems: 'center',
  },
  text: {
    margin: 24,
    fontSize: 14,
    fontFamily: 'Arial',
    gap: 5,
    padding: 3,
    textAlign:'justify',
  },
  title:{
    textAlign:'center',
    marginTop:10,
    marginLeft: 15,
    fontSize: 20,
    backgroundColor:'#E6BB47',
    borderRadius: 30,
    width: 300,
    alignItems:'center',
   
  },
  box: {
  marginTop: 20,
  borderRadius: 10,
  backgroundColor: '#E6BB47',
  width: 330,
  height: 600,
},
});
