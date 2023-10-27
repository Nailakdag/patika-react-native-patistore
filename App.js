import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from "react-native";

const data = [
  {
    id: 0,
    title: "Xiaomi Mi True Wireless Earbuds",
    imgURL:
      "https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg",
    price: "₺134,77",
    inStock: true,
  },
  {
    id: 1,
    title: "General Mobile GM 20",
    imgURL:
      "https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg",
    price: "₺1.810,21",
    inStock: true,
  },
  {
    id: 2,
    title: "Philips 58PUS8505/62 The One",
    imgURL:
      "https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg",
    price: "₺6.992,25",
    inStock: false,
  },
  {
    id: 3,
    title: "LG 49UM7100PLB Ultra HD 4K",
    imgURL:
      "https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg",
    price: "₺4.614,38",
    inStock: true,
  },
  {
    id: 4,
    title: "Samsung Galaxy M31 SM-M315F",
    imgURL:
      "https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg",
    price: "₺2.995,80",
    inStock: true,
  },
  {
    id: 5,
    title: "Apple AirPods Series 2",
    imgURL:
      "https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg",
    price: "₺1.299,00",
    inStock: true,
  },
  {
    id: 6,
    title: "Lenovo Tab M10 Plus",
    imgURL:
      "https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg",
    price: "₺2.496,50",
    inStock: false,
  },
  {
    id: 7,
    title: "Xiaomi Redmi 20000 Mah",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg",
    price: "₺134,70",
    inStock: false,
  },
  {
    id: 8,
    title: "Xiaomi Mijia Smart Home 360",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg",
    price: "₺269,73",
    inStock: true,
  },
  {
    id: 9,
    title: "Xiaomi Mi Box S 4K Ultra HD",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg",
    price: "₺478,53",
    inStock: true,
  },
  {
    id: 10,
    title: "Haylou Solar LS-5 Smartwatch",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg",
    price: "₺296,00",
    inStock: true,
  },
];

export default function App() {
  const [text, onChangeText] = useState("");
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    if (text.length > 2) {
      setFilterData([
        ...data.filter((item) =>
          item.title.toLowerCase().includes(text.toLowerCase()),
        ),
      ]);
    } else {
      setFilterData([...data]);
    }
  }, [text]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        value={text}
        onChangeText={onChangeText}
      />
      <FlatList
        data={filterData}
        style={styles.list}
        numColumns={2}
        keyExtractor={(item) => item?.id.toString()}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => {
          return (
            <View key={item?.id} style={styles.productContainer}>
              <Image style={{ width: 125, height: 125 }} src={item.imgURL} />
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>{item?.title}</Text>
                <Text style={styles.priceText}>{item?.price}</Text>
                <Text style={styles.inStockText}>
                  {item?.inStock ? "" : "Stokta Yok"}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "purple",
    textAlign: "left",
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    borderColor: "transparent",
    backgroundColor: "#eee",
    borderRadius: 5,
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
  productContainer: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10, // 10 piksel boşluk ekleyin
    overflow: "hidden",
    borderRadius: 5,
  },
  list: {
    width: "100%",
    marginTop: 5,
  },
  columnWrapper: {
    marginVertical: 5,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },
  titleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "purple",
    textAlign: "left",
    marginTop: 10,
    marginBottom: 5,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "gray",
    textAlign: "left",
  },
  inStockText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "red",
    textAlign: "left",
    marginTop: 5,
  },
});
