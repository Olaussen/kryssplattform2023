// Oppgave 1
console.log("\n----- Oppgave 1 -----");

type NestedArray<T> = T | NestedArray<T>[];

const nestedData: NestedArray<number> = [1, [2, [3, 4], 5], 6];

function flattenArray<T>(arr: NestedArray<T>): T[] {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  //   const temp = [];
  //   for (const item of arr) {
  //     temp.push(...flattenArray(item));
  //   }
  //   return temp;
  return arr.flatMap((item) => flattenArray(item));
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));

// Oppgave 2
console.log("\n----- Oppgave 2 -----");

type UnwrapArray<T> = T extends Array<infer U> ? U : T;

type UnwrappedArray = UnwrapArray<NestedArray<number>>;

const unwrappedValue: UnwrappedArray = 3;
console.log("Unwrapped:", unwrappedValue);

// Oppgave 3
console.log("\n----- Oppgave 3 -----");

interface TreeNode<T> {
  value: T;
  children: TreeNode<T>[];
}

function traverseTree<T>(node: TreeNode<T>): T[] {
  return [node.value, ...node.children.flatMap(traverseTree)];
}

const rootNode: TreeNode<number> = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 3, children: [] },
        { value: 4, children: [] },
      ],
    },
    {
      value: 5,
      children: [],
    },
  ],
};

console.log(traverseTree(rootNode)); // Output: 1, 2, 3, 4, 5

// Oppgave 4
console.log("\n----- Oppgave 4 -----");


// import React from "react";
// import { Text, View } from "react-native";

// interface AdditionalProps {
//   title: string;
// }

// function withAdditionalProps<T>(
//   WrappedComponent: React.ComponentType<T>
// ): React.FC<T & AdditionalProps> {
//   const EnhancedComponent: React.FC<T & AdditionalProps> = (props) => {
//     const addProps = props as AdditionalProps; // Type casting to ensure TypeScript understands the props
//     return <WrappedComponent {...(addProps as T)} />;
//   };
//   return EnhancedComponent;
// }

// interface OriginalComponentProps {
//   description: string;
//   title?: string;
// }

// export const OriginalComponent: React.FC<OriginalComponentProps> = ({
//   description,
//   title,
// }) => {
//   return (
//     <View>
//       {title && <Text style={{ color: "white" }}>Title: {title}</Text>}
//       <Text style={{ color: "white" }}>Description: {description}</Text>
//     </View>
//   );
// };

// const EnhancedOriginalComponent = withAdditionalProps(OriginalComponent);

// export const HOC = () => {
//   return (
//     <EnhancedOriginalComponent
//       description={"Beskrivelse oj oj!"}
//       title={"Hei, Hauk! Du er rå!"}
//     />
//   );
// };


// Oppgave 5
console.log("\n----- Oppgave 5 -----");

// import { useEffect, useState } from "react";

// export type ApiResponse<T> = {
//   data: T;
//   isLoading: boolean;
//   error: Error | null;
// };

// function useApi<T>(url: string): ApiResponse<T> {
//   const [data, setData] = useState<T>([] as T);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       setIsLoading(true);
//       try {
//         const response = await fetch(url);
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchData();
//   }, [url]);

//   return { data, isLoading, error };
// }

// export default useApi;
