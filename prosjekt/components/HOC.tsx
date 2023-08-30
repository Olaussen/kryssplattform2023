import React from "react";
import { Text, View } from "react-native";

interface AdditionalProps {
  title: string;
}

function withAdditionalProps<T>(
  WrappedComponent: React.ComponentType<T>
): React.FC<T & AdditionalProps> {
  const EnhancedComponent: React.FC<T & AdditionalProps> = (props) => {
    const addProps = props as AdditionalProps; // Type casting to ensure TypeScript understands the props
    return <WrappedComponent {...(addProps as T)} />;
  };
  return EnhancedComponent;
}

interface OriginalComponentProps {
  description: string;
  title?: string;
}

export const OriginalComponent: React.FC<OriginalComponentProps> = ({
  description,
  title,
}) => {
  return (
    <View>
      {title && <Text style={{ color: "white" }}>Title: {title}</Text>}
      <Text style={{ color: "white" }}>Description: {description}</Text>
    </View>
  );
};

const EnhancedOriginalComponent = withAdditionalProps(OriginalComponent);

export const HOC = () => {
  return (
    <EnhancedOriginalComponent
      description={"Beskrivelse oj oj!"}
      title={"Hei, Hauk! Du er rå!"}
    />
  );
};
