import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

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
      const url = `https://api.exchangerate.host/convert?from=${de.toUpperCase()}&to=${para.toUpperCase()}&amount=${valor}`;
      const resp = await fetch(url);
      const dados = await resp.json();
      if (dados?.result != null) {
        setResultado(`${Number(valor)} ${de.toUpperCase()} = ${dados.result.toFixed(2)} ${para.toUpperCase()}`);
      } else {
        setResultado("Não foi possível converter (verifique os códigos das moedas).");
      }
    } catch (e: any) {
      setResultado("Erro: " + e.message);
    } finally {
      setLoading(false)
    }
  }

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
          <Text style={styles.label}>De (código)</Text>
          <TextInput
            style={styles.input}
            placeholder="USD, EUR, BRL..."
            autoCapitalize="characters"
            value={de}
            onChangeText={setDe}
            maxLength={3}
          />
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Para (código)</Text>
          <TextInput
            style={styles.input}
            placeholder="BRL, USD, EUR..."
            autoCapitalize="characters"
            value={para}
            onChangeText={setPara}
            maxLength={3}
          />
        </View>
      </View>

      <Button title={loading ? "Convertendo..." : "Converter"} onPress={converter} disabled={loading} />

      {resultado && <Text style={styles.result}>{resultado}</Text>}

      <Text style={styles.muted}>Use códigos ISO 4217 — exemplos: USD, BRL, EUR, ARS, GBP.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, gap: 14 },
  titulo: { fontSize: 22, fontWeight: "600", textAlign: "center", marginBottom: 4 },
  row: { flexDirection: "row", gap: 10 },
  col: { flex: 1 },
  label: { marginBottom: 6, color: "#64748b" },
  input: { borderWidth: 1, borderColor: "#cbd5e1", borderRadius: 10, padding: 10, backgroundColor: "#fff" },
  result: { marginTop: 18, fontSize: 18, fontWeight: "700", textAlign: "center" },
  muted: { textAlign: "center", color: "#64748b", marginTop: 6 }
});