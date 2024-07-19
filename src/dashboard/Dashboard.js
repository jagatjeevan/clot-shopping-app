import { StyleSheet, Text, View } from "react-native";

import withAuth from "../context/authContext";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <Text>{props.authContext.state.user.email} is logged in.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withAuth(Dashboard);
