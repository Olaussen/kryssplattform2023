import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

export const Colors = {
  brandBackground: '#151515',
  brandWhite: '#ffffff',
};

interface Styled {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const button: React.FC<Styled> = ({ style, children }) => {
  return (
    <LinearGradient
      colors={['#EF5F53', '#FA8F70']}
      start={[0, 0]}
      end={[1, 0]}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

const blue: React.FC<Styled> = ({ style, children }) => {
  return (
    <LinearGradient colors={['#5935FF', '#47408E']} style={style}>
      {children}
    </LinearGradient>
  );
};

const pink: React.FC<Styled> = ({ style, children }) => {
  return (
    <LinearGradient colors={['#FF6CD9', '#FF2184']} style={style}>
      {children}
    </LinearGradient>
  );
};

const cyan: React.FC<Styled> = ({ style, children }) => {
  return (
    <LinearGradient colors={['#01D4E4', '#009DE0']} style={style}>
      {children}
    </LinearGradient>
  );
};

const yellow: React.FC<Styled> = ({ style, children }) => {
  return (
    <LinearGradient colors={['#F9C270', '#FFAA2B']} style={style}>
      {children}
    </LinearGradient>
  );
};

export const Gradients = {
  button,
  blue,
  pink,
  cyan,
  yellow,
};

export const Fonts = {
  homeTitle(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '700',
      fontSize: 30,
    };
  },

  buttonTitle(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '700',
      fontSize: 16,
    };
  },
  paragraph(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 16,
    };
  },
  placeholder(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 14,
    };
  },
  bottomBarItem(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 12,
    };
  },
};
