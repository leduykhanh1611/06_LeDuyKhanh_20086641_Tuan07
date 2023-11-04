import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
export default function screen2({ navigation }) {
  const rou = useRoute();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 272,
          height: 278,
          marginLeft: "70px",
        }}
      >
        <Image
          style={{ width: "272px", height: "278px" }}
          source={rou.params?.image}
        />
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{fontFamily:"Roboto", fontSize:"20px", fontWeight:700, lineHeight:"23,44px"}}>
          {rou.params?.name}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginLeft:"20px",
          marginTop:"10px"
        }}
      >
        <Text style={{fontFamily:"Roboto", fontSize:"20px", lineHeight:"17,58px", color: "#333" }}>
          {rou.params?.discription}
        </Text>
        <Text style={{fontFamily:"Roboto", fontSize:"20px", fontWeight:700, lineHeight:"23,44px"}}>
          {rou.params?.price}
        </Text>
      </View>

      <View
        style={{
          marginVertical: 20,
          paddingHorizontal: 20,
          flexDirection: "row",
          marginTop:"30px"
        }}
      >
        <Image
          source={require("../assets/Vector.png")}
          style={{ width: 25, height: 25 }}
        />
        <Text style={{fontFamily:"Roboto", fontSize:"20px", lineHeight:"17,58px", color: "#333",paddingHorizontal: 20 }}>Delivery in</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft:"20px"
        }}
      >
        <Text style={{fontFamily:"Roboto", fontSize:"20px", fontWeight:700, lineHeight:"23,44px"}}>30 min</Text>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{
              backgroundColor: "#F1B000",
              width: 25,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily:"Roboto", fontSize:"20px", fontWeight:700, lineHeight:"23,44px", color: "#fff" }}>-</Text>
          </Pressable>
          <Text style={{ marginHorizontal: 10, fontFamily:"Roboto", fontSize:"20px", fontWeight:700, lineHeight:"23,44px"}}>1</Text>
          <Pressable
            style={{
              backgroundColor: "#F1B000",
              width: 25,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily:"Roboto", fontSize:"20px", fontWeight:700, lineHeight:"23,44px", color: "#fff" }}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontFamily:"Roboto", fontSize:"20px", fontWeight:700, lineHeight:"23,44px" }}>
          Restaurants info
        </Text>
        <Text style={{fontFamily:"Roboto", fontSize:"15px", lineHeight:"17,58px", color: "#333", marginTop:"10px"}}>
          Order a Large Pizza but the size is the equivalent of a medium/small
          from other places at the same price range.
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <Pressable
          onPress={() => {
            navigation.goBack(); // quay trở về trang trước đó
          }}
          style={{
            backgroundColor: "#F1B000",
            height: 58,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontFamily:"Roboto", fontSize:"20px", fontWeight:700, lineHeight:"23,44px" , color: "#fff"}}>
            Add to cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
