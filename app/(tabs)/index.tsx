import { Alert, Text, TouchableOpacity, View ,TextInput} from "react-native";
import { useState } from "react";
export default function Index() {

  const[ username, setUsername] = useState("");
   const[ password, setPassword] = useState("");
  return (
    <View
      style={{
        backgroundColor: "lightgreen",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      

      <TextInput style={{borderWidth:1, width:200, padding:10, marginBottom:20,}} placeholder="Enter username..."onChangeText={(value)=>setUsername(value)}/>
        <TextInput style={{borderWidth:1, width:200, padding:10, marginBottom:20,}} placeholder="Type Password here..." onChangeText={(value)=>setPassword(value)} secureTextEntry={true}/>
      <TouchableOpacity onPress={() => {if(username ==="" || password===""){
        Alert.alert("Error", "Please fill all fields");}else{
          Alert.alert("Success", "Login succcessful!");}
        
      }}
        style={{ backgroundColor: "darkred", padding: 15, borderRadius: 10 ,marginBottom: 20
          ,}}
      >
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>

      <Text style={{fontSize:18}}> {username}</Text>
    </View>
  );
}
