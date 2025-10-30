import { Link } from 'expo-router';
import {Text, StyleSheet, Image, Button, View, ScrollView, TouchableOpacity,StatusBar} from 'react-native';


export default function App() {
  
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container1}>
          <Text style={styles.text1}> Pagina Inicial</Text>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.box1}>
                  <Text style={styles.text}>Renda Fixa</Text>
                  <Image style={styles.img} />
                  <View style={styles.buttons}>
                    <Link href={"/(stack)/rendafixa"} asChild>
                      <Button title="Entrar" onPress={() => {}} />
                    </Link>
                  </View>
                </View>

                <View style={styles.box2}>
                  <Text style={styles.text}>Renda Variável</Text>
                  <Image style={styles.img} />
                  <View style={styles.buttons}>
                    <Link href={"/(stack)/rendavariavel"} asChild>
                      <Button title="Entrar" onPress={() => {}} />
                    </Link>
                  </View>
                </View>

                <View style={styles.box3}>
                  <Text style={styles.text}>Cripto</Text>
                  <Image style={styles.img} />
                  <View style={styles.buttons}>
                    <Link href={"/(stack)/cripto"} asChild>
                      <Button title="Entrar" onPress={() => {}} />
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
  },
   text1: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
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
    width: 80,
    height: 40,
    borderRadius: 20,
    marginTop:2,
    marginBottom:10,
    backgroundColor: '#36B5F5',
    justifyContent: 'center',
  },
});
