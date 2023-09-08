import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const { Navigator, Screen } = createStackNavigator();
import HomeRoutes from '.'


const WelcomeRoutes: React.FC = () => {
    return (
        <NavigationContainer independent={true}>
            <Navigator>
                <Screen name="Welcome" component={HomeRoutes} />
                <Screen name="HomeRoutes" component={HomeRoutes} />
            </Navigator>
        </NavigationContainer>
    )
}

export default WelcomeRoutes


