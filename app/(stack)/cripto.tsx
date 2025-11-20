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
          <Text style={styles.title}> O que é Cripto moedas </Text>
            <Text style={styles.text}>
            As criptomoedas são moedas digitais criadas a partir da tecnologia blockchain, que garante segurança e transparência nas transações. 
            Elas funcionam de forma descentralizada, sem depender de bancos ou governos para validar operações. O Bitcoin, lançado em 2009, foi a primeira criptomoeda e continua sendo a mais conhecida. 
            Outras moedas, como o Ethereum, oferecem recursos adicionais, como contratos inteligentes. Hoje, são utilizadas para pagamentos, investimentos e até novos modelos de negócios digitais. A
            pesar do potencial, apresentam riscos como alta volatilidade, regulamentação incerta e possibilidade de fraudes.
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
