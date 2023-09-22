// App.tsx
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const Currency: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
  const fromCurrency = "NOK";
  const toCurrency = "EUR";

  const convertCurrency = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      const conversionRate = data.rates[toCurrency];
      const converted = (parseFloat(amount) * conversionRate).toFixed(2);
      setConvertedAmount(converted);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Enter Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{ marginBottom: 8, borderWidth: 1, padding: 8 }}
      />
      <Button title="Convert" onPress={convertCurrency} />
      {convertedAmount && (
        <Text style={{ marginTop: 8 }}>
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </Text>
      )}
    </View>
  );
};

export default Currency;
