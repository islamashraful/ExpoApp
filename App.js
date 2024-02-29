import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Application from "expo-application";
import Constants from "expo-constants";

const API_ENDPOINT = Constants.expoConfig?.extra?.API_ENDPOINT;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ApplicationId: {Application.applicationId}
      </Text>
      <Text style={styles.text}>API_ENDPOINT: {API_ENDPOINT}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
  },
});
