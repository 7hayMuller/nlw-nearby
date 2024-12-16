import { colors } from "@/styles/colors";
import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { s } from "./styles";

type Props = {
  description: string;
  icon: React.ComponentType<IconProps>;
};

export default function Info({ icon: Icon, description }: Props) {
  return (
    <View style={s.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={s.text}>{description}</Text>
    </View>
  );
}
