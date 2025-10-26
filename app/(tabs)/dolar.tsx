import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default function Conversor() {
  const [valor, setValor] = useState("");
  const [de, setDe] = useState("USD");
  const [para, setPara] = useState("BRL");
  const [resultado, setResultado] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function converter() {
    if (!valor) return;
    setLoading(true);
    setResultado(null);

    try {
      const base = de.toLowerCase();
      const target = para.toLowerCase();
      const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}/${target}.json`;

      const response = await fetch(url);
      const dados = await response.json();

      const taxa = dados[base]?.[target];

      if (taxa != null) {
        const valorNum = Number(valor);
        const convertido = (valorNum * taxa).toFixed(2);
        setResultado(`${valorNum} ${de} = ${convertido} ${para}`);
      } else {
        setResultado("Não foi possível converter. Verifique as moedas.");
      }
    } catch (e: any) {
      setResultado("Erro: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  const moedas = ["USD", "BRL", "EUR", "ARS", "GBP", "JPY", "AUD", "CAD"];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas 💱</Text>

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>Valor</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: 100"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>De</Text>
          <Picker
            selectedValue={de}
            onValueChange={(itemValue) => setDe(itemValue)}
            style={styles.picker}
          >
            {moedas.map((moeda) => (
              <Picker.Item key={moeda} label={moeda} value={moeda} />
            ))}
          </Picker>
        </View>

        <View style={styles.col}>
          <Text style={styles.label}>Para</Text>
          <Picker
            selectedValue={para}
            onValueChange={(itemValue) => setPara(itemValue)}
            style={styles.picker}
          >
            {moedas.map((moeda) => (
              <Picker.Item key={moeda} label={moeda} value={moeda} />
            ))}
          </Picker>
        </View>
      </View>

      <Button
        title={loading ? "Convertendo..." : "Converter"}
        onPress={converter}
        disabled={loading}
      />

      {resultado && <Text style={styles.result}>{resultado}</Text>}

      <Text style={styles.muted}>
        Códigos ISO 4217 — Ex: USD, BRL, EUR, GBP, JPY
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, gap: 14 },
  titulo: { fontSize: 22, fontWeight: "600", textAlign: "center", marginBottom: 4 },
  row: { flexDirection: "row", gap: 10 },
  col: { flex: 1 },
  label: { marginBottom: 6, color: "#64748b" },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  picker: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 10,
  },
  result: { marginTop: 18, fontSize: 18, fontWeight: "700", textAlign: "center" },
  muted: { textAlign: "center", color: "#64748b", marginTop: 6 },
});
