// App.tsx
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const FormValidation: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const handleSubmit = () => {
    if (name.trim() === "" || !email.includes("@")) {
      setError("Please enter valid name and email.");
      setSuccess(undefined);
    } else {
      setError(undefined);
      setSuccess("Form submitted successfully!");
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 8, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 8, borderWidth: 1, padding: 8 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {error && !success && <Text style={{ color: "red" }}>{error}</Text>}
      {success && !error && <Text style={{ color: "green" }}>{success}</Text>}
    </View>
  );
};

export default FormValidation;
