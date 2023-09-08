import React, { FunctionComponent } from "react";
import { GestureResponderEvent, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import { Fonts, Gradients } from "../../Styles/StyleGuide";

interface IButtonProps { // Props for Button component
    title: string; // Required prop
    Icon?: FunctionComponent<SvgProps>; // Required prop
    onPress?: (event: GestureResponderEvent) => void; // Optional prop
}

// Assigning props to Button component(React.FC)
const Button: React.FC<IButtonProps> = ({ title, Icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Gradients.button>
                <Text style={[Fonts.buttonTitle(), { color: '#fff' }]}>{title}</Text>
                {Icon && <Icon />}
            </Gradients.button>
            {/* <Text>{title}</Text> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gradient: {
        borderRadius: 8,
        backgroundColor: '#000',
        paddingHorizontal: 32,
        paddingVertical: 16,
        flexDirection: 'row',
        marginTop: 16,
    }
})

export default Button