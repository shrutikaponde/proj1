import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { movies } from "../config/data";
import MoviePoster from "../screens/MoviePoster";

export default class Movies extends Component {

    onOpen() {

    }
    render() {
        console.log(movies) ;
        return (
                   <FlatList
            data={movies}
            renderItem={({item}) => <Text>{item.title}</Text>}
          />
         
        );
    }
}