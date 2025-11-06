import { Link } from 'expo-router';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

export default function Usuario() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=14' }}
        style={styles.avatar}
      />
      <Text style={styles.nome}>Arthur Vieira</Text>
      <Text style={styles.email}>arthur.vieira@email.com</Text>
      <Text style={styles.telefone}>+55 (11) 91234-5678</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Quem eu sou? </Text>
        <Text style={styles.value}>Olá! Meu nome é Arthur, sou Desenvolvedor de Sistemas e moro em Santana de Parnaíba, onde busco sempre aprimorar meus 
          conhecimentos e criar soluções tecnológicas inovadoras.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Histórico escolar:</Text>
        <Text style={styles.value}>
          Ensino médio - Sesi 433 (Conclusão 2023)
          Curso técnico DS- Etec Ermelinda Gerassi (Conclusão 2025)
        </Text>
      </View>

     
      <View style={styles.section}>
        <Text style={styles.label}>Perfil de Investimento:</Text>
        <Text style={styles.value}>Conservador: Renda fixa</Text>
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
    borderColor: '#0f0f0fff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
  },
});

