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
        <Image src={{ uri: "asset:/login/apple.svg" }} width={15} height={15} />
      </ThemedButton>
      <ThemedButton
        onPressed={() => onPressHandler("google")}
        title="Continue with Google"
        icon={true}
      >
        <Image src="../../assets/login/google.svg" width={15} height={15} />
      </ThemedButton>
      <ThemedButton
        onPressed={() => onPressHandler("facebook")}
        title="Continue with Facebook"
        icon={true}
      >
        <Image src="../../assets/login/facebook.svg" width={15} height={15} />
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
