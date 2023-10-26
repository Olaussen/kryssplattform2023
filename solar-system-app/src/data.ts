import { SvgProps } from "react-native-svg";
import { Gradients } from "./Styles/StyleGuide";
import Assets from "./Assets";

export type Category = {
  gradient: keyof typeof Gradients;
  label: string;
  Icon: React.FC<SvgProps>;
};

export const CATEGORIES: Category[] = [
  {
    gradient: "blue",
    label: "Plantes",
    Icon: Assets.icons.Planets,
  },
  {
    gradient: "pink",
    label: "Asteroids",
    Icon: Assets.icons.Asteroids,
  },
  {
    gradient: "cyan",
    label: "Stars",
    Icon: Assets.icons.Stars,
  },
  {
    gradient: "yellow",
    label: "Galaxies",
    Icon: Assets.icons.Galaxies,
  },
];

export type Planet = {
  name: string;
  description: string;
  Image: React.FC<SvgProps>;
};

export const PLANETS = [
  {
    name: "Mercury",
    description:
      "The smallest planet in the Solar System and the closest to the Sun.",
    Image: Assets.images.Mercury,
  },
  {
    name: "Venus",
    description:
      "The second planet from the Sun. It is named after the Roman goddess of love and beauty.",
    Image: Assets.images.Venus,
  },
  {
    name: "Earth",
    description:
      "The third planet from the Sun and the only astronomical object known to harbor life.",
    Image: Assets.images.Earth,
  },
  {
    name: "Mars",
    description:
      "The fourth planet from the Sun and the second-smallest planet in the Solar System.",
    Image: Assets.images.Mars,
  },
  {
    name: "Jupiter",
    description:
      "The fifth planet from the Sun and the largest in the Solar System.",
    Image: Assets.images.Jupiter,
  },
  {
    name: "Saturn",
    description:
      "The sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.",
    Image: Assets.images.Saturn,
  },
  {
    name: "Uranus",
    description:
      "The seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    Image: Assets.images.Uranus,
  },
  {
    name: "Neptune",
    description: "The eighth and farthest known Solar planet from the Sun.",
    Image: Assets.images.Neptune,
  },
];

export const doggoIpsum =
"Doggo ipsum i am bekom fat much ruin diet ur givin me a spook. Blep very jealous pupper mlem long water shoob doggo, he made many woofs doge ur givin me a spook bork, shoob ruff doggorino. Very jealous pupper I am bekom fat big ol pupper wrinkler ur givin me a spook, pats wow very biscit. Borkf thicc heck very hand that feed shibe stop it fren extremely cuuuuuute long water shoob noodle horse, smol borking doggo with a long snoot for pats aqua doggo much ruin diet clouds ur givin me a spook. Fluffer shibe snoot the neighborhood pupper h*ck doing me a frighten, waggy wags vvv sub woofer. Length boy doing me a frighten very taste wow you are doing me the shock borkf shibe, tungg heckin maximum borkdrive boof snoot, long doggo woofer shibe thicc. Vvv dat tungg tho wrinkler long water shoob puggo, h*ck very taste wow.Thicc you are doing me the shock most angery pupper I have ever seen extremely cuuuuuute ur givin me a spook big ol, pupper ur givin me a spook h*ck. Fat boi borkdrive very good spot aqua doggo very good spot boofers, puggo boofers tungg. wow such tempt. Heckin angery woofer long bois vvv shooberino vvv heckin smol borking doggo with a long snoot for pats, thicc heckin good boys boof thicc pats. Smol very taste wow heck adorable doggo sub woofer borking doggo, doggo stop it fren long doggo. porgo. Heck smol sub woofer fat boi, what a nice floof ur givin me a spook boof boofers, \borkdrive aqua doggo. Very good spot boofers very hand that feed shibe many pats, maximum borkdrive. pupperino blep. Long woofer very taste wow shoob extremely cuuuuuute, heck wrinkler.";
