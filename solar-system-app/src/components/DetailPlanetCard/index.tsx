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
      <PlanetImage width={200} height={200} style={styles.planet} />
      <View style={styles.infos}>
        <View style={styles.title}>
          <Text style={[Fonts.homeTitle(), styles.whiteText]}>
            {planetName}
          </Text>
          <TouchableOpacity>
            <Assets.icons.Save width={24} height={24} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.whiteText, styles.info]}>{planetInfo}</Text>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.whiteText}>Continue reading...</Text>
          <Assets.icons.OrangeForward
            width={16}
            height={16}
            style={styles.arrow}
          />
        </TouchableOpacity>
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
    marginVertical: 10,
    flexDirection: "row",
  },
  planet: {
    top: -40,
    left: -35,
  },
  infos: {
    left: -30,
    width: "43%",
    merginRight: 100,
    marginLeft: 6,
    justifyContent: "center",
  },
  info: {
    opacity: 0.6,
    height: 100,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  whiteText: {
    color: "white",
  },

  arrow: {
    marginLeft: 5,
  },
  footer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
});

export default DetailPlanetCard;
