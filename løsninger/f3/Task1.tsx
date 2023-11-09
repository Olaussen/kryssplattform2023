// App.tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Counter: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
}

export default Counter;

function findFirst<T>(items: T[], predicate: (item: T) => boolean): T | undefined {
  for (const item of items) {
      if (predicate(item)) {
          return item;
      }
  }
  return undefined;
}

findFirst

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

strLength

// Definerer en grensesnitt for den forventede responsstrukturen
interface ApiResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// En funksjon som gjør et eksternt kall
async function fetchTodo(id: number): Promise<ApiResponse> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  // Sjekker om responsen er vellykket
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  // Anta at responsen er i JSON-format
  const result: ApiResponse = await response.json();
  return result;
}

// Bruker funksjonen
fetchTodo(1)
  .then(todo => console.log('Fetched todo:', todo))
  .catch(error => console.error('An error occurred:', error));