import React from "react";
import { Text, View } from "react-native";
import useApi from "../hooks/useApi";

type Pokemon = {
  name: string;
  abilities: {
    ability: { name: string };
  }[];
};

const Pokemon = () => {
  const { data, isLoading, error } = useApi<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/pikachu"
  );

  const { name, abilities } = data;

  if (isLoading) {
    return <Text style={{ color: "white" }}>Loading...</Text>;
  }

  if (error) {
    return <Text style={{ color: "white" }}>Error: {error.message}</Text>;
  }

  return (
    <View>
      <Text style={{ color: "white" }}>{name}</Text>
      {abilities?.length && (
        <View>
          <Text style={{ color: "white" }}>Abilities:</Text>
          {abilities.map((ability) => (
            <Text key={ability.ability.name} style={{ color: "white" }}>
              {ability.ability.name}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Pokemon;
