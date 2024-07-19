import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Dashboard from "./src/dashboard/Dashboard";
import Login from "./src/login/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? <Dashboard /> : <Login />}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
