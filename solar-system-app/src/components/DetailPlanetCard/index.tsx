import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Assets from "../../Assets";
import { Colors, Fonts } from "../../Styles/StyleGuide";
import { SvgProps } from "react-native-svg";

type DetailPlanetCardProps = {
  planetName: string;
  PlanetImage: React.FC<SvgProps>;
  planetInfo: string;
};

const DetailPlanetCard: React.FC<DetailPlanetCardProps> = ({
  planetName,
  PlanetImage,
  planetInfo,
}) => {
  return (
    <View style={styles.container}>
      <PlanetImage width={200} height={200} />
      <View>
        <View style={styles.title}>
          <Text style={[styles.titleText, Fonts.homeTitle(), styles.whiteText]}>
            {planetName}
          </Text>
          <TouchableOpacity>
            <Assets.icons.Save width={24} height={24} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.whiteText, styles.info]}>{planetInfo}</Text>
        <View style={styles.continue}>
          <Text style={styles.whiteText}>Continue reading...</Text>
          <Assets.icons.OrangeForward
            width={16}
            height={16}
            style={styles.arrow}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: Colors.brandBackground,
    height: "auto",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
  infos: {
    color: "white",
  },
  info: {
    opacity: 0.6,
  },
  title: {
    width: "40%",
    flexDirection: "row",
    color: "white",
    justifyContent: "space-between",
  },
  whiteText: {
    color: "white",
  },
  titleText: {},
  continue: {
    flexDirection: "row",
  },
  arrow: {
    marginLeft: 5,
  },
});

export default DetailPlanetCard;
