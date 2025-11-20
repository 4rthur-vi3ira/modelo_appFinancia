import { Link } from 'expo-router';
import {Text, StyleSheet, Image, Button, View, ScrollView, TouchableOpacity,StatusBar} from 'react-native';


export default function App() {
  
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container1}>
          <Text style={styles.text1}> Cursos </Text>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.box1}>
                  <Text style={styles.text}>Renda Fixa</Text>
                  <Image style={styles.img} source={require('../../assets/conteudos/renda_fixa.png')} />
                  <View style={styles.buttons}>
                    <Link href={"/(stack)/rendafixa"} asChild>
                      <Button title="Entrar" onPress={() => {}} />
                    </Link>
                  </View>
                </View>

                <View style={styles.box2}>
                  <Text style={styles.text}>Renda Variável</Text>
                  <Image style={styles.img} source={require('../../assets/conteudos/renda_variavel.png')} />
                  <Link href={"/(stack)/rendavariavel"} asChild>
                  <View style={styles.buttons}>
                      <Button title="Entrar" onPress={() => {}} />
                    </View>
                  </Link>
                </View>

                <View style={styles.box3}>
                  <Text style={styles.text}>Cripto</Text>
                  <Image style={styles.img} source={require('../../assets/conteudos/cripto.png')} />
                  <View style={styles.buttons}>
                    <Link href={"/(stack)/cripto"} asChild>
                      <Button title="Entrar" onPress={() => {}} color="#1976D2" />
                    </Link>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
   text1: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  container1: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#DCFCED', 
    height: 1000,
    flexDirection: 'column',
  },
  img: {
    height: 95,
    width: 95,
  },
  box1: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#F5C849',
    margin: 10,
  },
  box2: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#F5C849',
    margin: 10,
  },
  box3: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 20,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#F5C849',
  },
  box4: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 20,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#F5C849',
  },
   box5: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 20,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#F5C849',
   },
   buttons: {
    marginTop: 10, // Maior espaçamento superior
    marginBottom: 20, // Maior espaçamento inferior
    justifyContent: 'center',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    padding: 10, // Adiciona espaçamento interno
    backgroundColor: '#f5f5f5', // Fundo suave para destacar a seção
    borderRadius: 8, // Bordas arredondadas
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
});
