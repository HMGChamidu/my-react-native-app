import { Alert, Text, TouchableOpacity, View ,TextInput} from "react-native";
import { useState } from "react";
export default function Index() {

  const[ text, setText] = useState("");
  return (
    <View
      style={{
        backgroundColor: "lightgreen",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      

      <TextInput style={{borderWidth:1, width:200, padding:10, marginBottom:20,}} placeholder="Type Something..."onChangeText={(value)=>setText(value)}/>
      <TouchableOpacity
        onPress={() => Alert.alert("Clicked!")}
        style={{ backgroundColor: "green", padding: 15, borderRadius: 15 ,marginBottom: 20,}}
      >
        <Text style={{color: 'white'}}>Show Text</Text>
      </TouchableOpacity>

      <Text style={{fontSize:18}}> {text}</Text>
    </View>
  );
}
