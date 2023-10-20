import { View } from "react-native"
import { Text } from "react-native-svg"
import { usePlanetContext} from "../../providers/PlanetContextProvider";



const DetailPage: React.FC = () => {
    const {currentPlanet} = usePlanetContext();
    const {planetName, PlanetImage} = currentPlanet;

    return (
        <View style={{height: "100%", justifyContent: "center", alignItems: "center"}}>
            <PlanetImage width={164} height={164} />
            <Text>{planetName}</Text>
        </View>
    )       
}


export default DetailPage;
