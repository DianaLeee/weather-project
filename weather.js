import React, { Component } from 'react';
import  { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ['#00C6Fb', '#005BEA'],
        title: "It's raining",
        subtitle: "Look outside",
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "It's Sunny",
        subtitle: "outside is hell",
        icon: 'ios-sunny'
    }, 
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subtitle: "Go out",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "Thunderstorm",
        subtitle: "Go out",
        icon: 'ios-thunderstorm'
    }, 
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow",
        subtitle: "do you want to build a snowman?",
        icon: 'ios-snow'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "raining",
        icon: 'ios-rainy-outline'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Haze",
        subtitle: "??",
        icon: 'ios-sunny'
    }

}

function Weather({weatherName, temp}) {
    console.log(weatherName);
    return (
        <LinearGradient 
            colors = {weatherCases[weatherName].colors}
            style = {styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
                <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: 'white',
        marginBottom: 24,
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
    }, 
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    }, 
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: 'white',
        marginBottom: 24
    }
});