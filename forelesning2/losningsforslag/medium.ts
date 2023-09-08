// Oppgave 1
console.log("\n----- Oppgave 1 -----");

type PartialProps<T> = {
  [K in keyof T]?: T[K];
};

type RequiredProps<T> = {
  [K in keyof T]-?: T[K];
};

interface Human {
  name: string;
  age: number;
}

const partialPerson: PartialProps<Human> = { name: "Alice" };
const requiredPerson: RequiredProps<Human> = { name: "Bob", age: 25 };

console.log("Partial person:", partialPerson);
console.log("Required person:", requiredPerson);

// Oppgave 2
console.log("\n----- Oppgave 2 -----");

type Product = { name: string; price: number; description: string };

const product = { name: "Laptop", price: 999.99 };

function logProducts(products: Product[]) {
  products.forEach((product) => {
    console.log(`Name: ${product.name}, Price: ${product.price}`);
  });
}

logProducts([product as Product]);
// Ikke anbefalt, ettersom vi kan utløse en runtime error
// Men, det er en løsning som fungerer når man vet

// Oppgave 3
console.log("\n----- Oppgave 3 -----");

type FilterFunction<T> = (item: T) => boolean;

function filterArray<T>(arr: T[], filterFn: FilterFunction<T>): T[] {
  return arr.filter(filterFn);
}

const numbersArray = [1, 2, 3, 4, 5];
const filteredNumbers = filterArray(numbersArray, (num) => num % 2 === 0);

const stringsArray = ["regninger", "lønn", "ror", "tillit", "kaffe", "mat"];
const palindromes = filterArray(
  stringsArray,
  (str) => str === str.split("").reverse().join("")
);

console.log("Even numbers:", filteredNumbers);
console.log("Palindromes:", palindromes);

// Oppgave 4
console.log("\n----- Oppgave 4 -----");

/*
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  color: string;
  label: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color,
  label,
  disabled = false,
  size = "large",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[size]]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  small: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  label: {
    color: "#25e",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
*/

// Oppgave 5
console.log("\n----- Oppgave 5 -----");
// Bruken av denne ble vist i øvingslabben

/*
import React, { ReactNode, createContext, useContext } from "react";

interface UserData {
  id: string;
  username: string;
}

interface AuthContextType {
  user: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<UserData | null>(null);

  const login = (userData: UserData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
*/
