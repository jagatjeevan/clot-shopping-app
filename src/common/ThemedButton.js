import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ThemedButton(props) {
  const getIcon = () => {
    if (!props.icon) return null;

    return props.children;
  };

  let buttonStyles = props.isPrimary
    ? { ...styles.pressableStyles, ...styles.primary }
    : { ...styles.pressableStyles, ...styles.secondary };

  buttonStyles = props.icon
    ? { ...buttonStyles, ...styles.withButtonStyles }
    : buttonStyles;

  const textStyles = props.isPrimary
    ? styles.primaryText
    : styles.secondaryText;

  return (
    <Pressable style={buttonStyles} onPress={props.onPressed}>
      {getIcon()}

      <Text style={textStyles}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableStyles: {
    padding: 10,
    marginTop: 10,
    width: "100%",
    textAlign: "center",
    borderRadius: "50%",
  },
  withButtonStyles: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  primary: {
    backgroundColor: "#8E6CEF",
  },
  secondary: {
    backgroundColor: "#F4F4F4",
  },
  primaryText: {
    color: "#fff",
    textAlign: "center",
  },
  secondaryText: {
    color: "#272727",
    textAlign: "center",
  },
});
