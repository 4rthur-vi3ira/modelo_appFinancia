import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Tipos de investimento disponíveis
type TipoInvestimento = 'rendaFixa' | 'rendaVariavel' | 'cripto';

// Estrutura de cada item do histórico
interface HistoricoItem {
  mes: number;
  saldo: number;
  
}

export default function SimuladorFinanceiro(): JSX.Element {
  const [valorInicial, setValorInicial] = useState<string>('');
  const [aporteMensal, setAporteMensal] = useState<string>('');
  const [prazoMeses, setPrazoMeses] = useState<string>('');
  const [tipoInvestimento, setTipoInvestimento] = useState<TipoInvestimento>('rendaFixa');
  const [resultadoFinal, setResultadoFinal] = useState<number | null>(null);
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);

  // Taxas mensais simuladas para cada tipo de investimento
  const taxasMensais: Record<TipoInvestimento, number> = {
    rendaFixa: 0.009,
    rendaVariavel: 0.015,
    cripto: 0.03,
  };

  const simularInvestimento = (): void => {
    const meses = parseInt(prazoMeses);
    const aporte = parseFloat(aporteMensal);
    const inicial = parseFloat(valorInicial);
    const taxa = taxasMensais[tipoInvestimento];

    if (isNaN(meses) || isNaN(aporte) || isNaN(inicial)) {
      Alert.alert('Erro', 'Preencha todos os campos com valores válidos.');
      setResultadoFinal(null);
      setHistorico([]);
      return;
    }

    let saldo = inicial;
    const evolucao: HistoricoItem[] = [];

    for (let i = 1; i <= meses; i++) {
      saldo = saldo * (1 + taxa) + aporte;
      evolucao.push({ mes: i, saldo: parseFloat(saldo.toFixed(2)) });
    }

    setResultadoFinal(saldo);
    setHistorico(evolucao);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Simulador de Investimentos</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor inicial (R$)"
        keyboardType="numeric"
        value={valorInicial}
        onChangeText={setValorInicial}
      />

      <TextInput
        style={styles.input}
        placeholder="Aporte mensal (R$)"
        keyboardType="numeric"
        value={aporteMensal}
        onChangeText={setAporteMensal}
      />

      <TextInput
        style={styles.input}
        placeholder="Prazo em meses"
        keyboardType="numeric"
        value={prazoMeses}
        onChangeText={setPrazoMeses}
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Tipo de investimento:</Text>
        <Picker
          selectedValue={tipoInvestimento}
          onValueChange={(itemValue: TipoInvestimento) =>
            setTipoInvestimento(itemValue)
          }
        >
          <Picker.Item label="Renda Fixa" value="rendaFixa" />
          <Picker.Item label="Renda Variável" value="rendaVariavel" />
          <Picker.Item label="Criptomoedas" value="cripto" />
        </Picker>
      </View>

      <Button title="Simular" onPress={simularInvestimento} />

      {resultadoFinal !== null && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTitulo}>Resultado final:</Text>
          <Text style={styles.resultadoValor}>
            R$ {resultadoFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </Text>

          <Text style={styles.resultadoDetalhes}>Evolução mês a mês:</Text>
          {historico.map((item) => (
            <Text key={item.mes}>
              Mês {item.mes}: R$ {item.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1976D2',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  resultado: {
    marginTop: 30,
  },
  resultadoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultadoValor: {
    fontSize: 22,
    color: '#2E7D32',
    marginVertical: 10,
  },
  resultadoDetalhes: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
