import { Link } from 'expo-router';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

export default function Usuario() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=17' }}
        style={styles.avatar}
      />
      <Text style={styles.nome}>João Silva</Text>
      <Text style={styles.email}>joao.silva@email.com</Text>
      <Text style={styles.telefone}>+55 (11) 91234-5678</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Nível:</Text>
        <Text style={styles.value}>Intermediário</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Progresso:</Text>
        <Text style={styles.value}>75%</Text>
      </View>

     
      <View style={styles.section}>
        <Text style={styles.label}>Perfil de Investimento:</Text>
        <Text style={styles.value}>Conservador: Renda fixa</Text>
      </View>
      

      <View style={styles.actions}>
        <Button title="Editar Perfil" onPress={() => {}} />
        <Link href="/(stack)/testeDePerfil" asChild>
        <Button title="Teste de perfil de investido" onPress={() => {}} />
      </Link>
        <Button title="Sair" onPress={() => {}} color="red" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#1976D2',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  telefone: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
  },
  actions: {
    marginTop: 20,
    width: '100%',
    gap: 10,
  },
});
