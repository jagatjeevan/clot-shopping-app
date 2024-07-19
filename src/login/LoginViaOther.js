import { Text, StyleSheet, Image } from "react-native";
import ThemedButton from "../common/ThemedButton";

export default function LoginViaOther() {
  const onPressHandler = (loginvia) => {
    console.log("button pressed", loginvia);
  };

  return (
    <>
      <Text style={styles.heading}>Don't have an Account ? Create One</Text>
      <ThemedButton
        onPressed={() => onPressHandler("apple")}
        title="Continue with Apple"
        icon={true}
      >
        <Image source={require("../../assets/login/apple.png")} />
      </ThemedButton>
      <ThemedButton
        onPressed={() => onPressHandler("google")}
        title="Continue with Google"
        icon={true}
      >
        <Image source={require("../../assets/login/google.png")} />
      </ThemedButton>
      <ThemedButton
        onPressed={() => onPressHandler("facebook")}
        title="Continue with Facebook"
        icon={true}
      >
        <Image source={require("../../assets/login/facebook.png")} />
      </ThemedButton>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 15,
    marginBottom: 45,
  },
});
