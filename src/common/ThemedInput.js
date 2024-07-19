import { StyleSheet, TextInput } from "react-native";

export default function ThemedInput(props) {
  return <TextInput {...props} style={styles.inputStyles} />;
}

const styles = StyleSheet.create({
  inputStyles: {
    padding: 20,
    backgroundColor: "#F4F4F4",
    width: "100%",
  },
});
