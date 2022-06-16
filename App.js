import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "../ChickenApp/src/components/Button";
import LoginScreen from "react-native-login-screen";
export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen
        logoImageSource={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw1.pngwing.com%2Fpngs%2F848%2F36%2Fpng-transparent-bird-logo-rooster-chicken-food-chicken-as-food-poussin-doner-kebab-text.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-vieis&tbnid=qb3nW4jNW8Wc7M&vet=10CAkQxiAoC2oXChMI0Izdoaqy-AIVAAAAAB0AAAAAEAY..i&docid=pDFNaM152Cr9CM&w=920&h=518&itg=1&q=chicken%20logo%20in%20red%20background&ved=0CAkQxiAoC2oXChMI0Izdoaqy-AIVAAAAAB0AAAAAEAY"}
        onLoginPress={() => {}}
        onSignupPress={() => {}}
        onEmailChange={() => {}}
        onPasswordChange={() => {}}
        style={{ backgroundColor: "#FF5C58" }}
        loginButtonStyle={{ backgroundColor: "black" }}
        dividerStyle={{backgroundColor:'white'}}
      />
      <StatusBar styles="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5C58",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBox: {
    width: "80%",
    height: "50%",
    backgroundColor: "#FFF8E5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "orange",
    width: "75%",
    borderRadius: 10,
    height: 50,
    padding: 10,
  },
});
