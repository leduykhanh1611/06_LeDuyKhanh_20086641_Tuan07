import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function screen1({ navigation }) {
  var [data, setData] = useState([]);
  var arr = []
  useEffect(() => {
    fetch("https://6541a52ff0b8287df1fe9707.mockapi.io//donut")
      .then((response) => response.json())
      .then((json) => {
        arr = json
        setData(arr);
      });
  }, []);
var arr1  = arr
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginLeft: "14px" }}>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: "16px",
            lineHeight: "18,75px",
          }}
        >
          Welcome, Jala!
        </Text>
      </View>
      <View style={{ flex: 1, marginLeft: "14px" }}>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: "20px",
            lineHeight: "18,75px",
            fontWeight: 700,
          }}
        >
          Choice you Best food
        </Text>
      </View>
      <View style={{ flex: 1, marginLeft: "14px" }}>
        <TextInput
          placeholder="Search food"
          style={{
            padding: 5,
            width: 226,
            height: 46,
            borderWidth: "1px",
            borderRadius: "3px",
            backgroundColor: "#d3d3d3",
            borderRadius: "5px",
          }}
        ></TextInput>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <Pressable
          onPress={() => {
            setData(arr1)
          }}
          style={{
            width: "99px",
            height: "32px",
            borderWidth: "1px",
            borderRadius: "5px",
            backgroundColor: "#d3d3d3",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "black", fontWeight: "bold", textAlign: "center" }}
          >
            Donut
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: "99px",
            height: "32px",
            borderWidth: "1px",
            borderRadius: "5px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#d3d3d3"
          }}
        >
          <Text
            style={{ color: "black", fontWeight: "bold", textAlign: "center" }}
          >
            Pink Donut
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            const newarr2 = arr.filter((item) => {
              return item.name.includes("Floating");
            })
            setData(newarr2)
          }}
          style={{
            width: "99px",
            height: "32px",
            borderWidth: "1px",
            borderRadius: "5px",
            backgroundColor: "#d3d3d3",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{ color: "black", fontWeight: "bold", textAlign: "center" }}
          >
            Floating
          </Text>
        </Pressable>
      </View>

      {data.map((item, index) => {
        return (
          <View
            style={{
              flex: 4,
              flexDirection: "row",
              backgroundColor: "pink",
              marginVertical: "10px",
              borderRadius: "10px",
              width: "380px",
              height: "115px",
              marginLeft: "25px",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "50px",
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 100, height: 100, marginLeft: "21px" }}
              ></Image>
            </View>
            <View
              style={{ flex: 3, marginLeft: "80px", justifyContent: "center" }}
            >
              <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>{item.name}</Text>
              <Text style={{ fontFamily: "Roboto", fontSize: "15px", lineHeight: "17,58px", color: "#333" }}>{item.discription}</Text>
              <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>${item.price}</Text>
            </View>
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate("screen2", {
                  image: item.image,
                  name: item.name,
                  price: item.price,
                  discription: item.discription,
                });
              }}
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Image
                source={require("../assets/plus_button.png")}
                style={{ width: 44, height: 45 }}
              ></Image>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}
