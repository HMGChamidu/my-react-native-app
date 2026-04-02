import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "seablue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => Alert.alert("Clicked!")}
        style={{ backgroundColor: "green", padding: 15, borderRadius: 15 }}
      >
        <Text style={{color: 'white'}}>Touch here</Text>
      </TouchableOpacity>

      <Text> Hello Chamidu</Text>
    </View>
  );
}
