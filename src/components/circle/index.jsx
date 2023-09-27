import React from "react";
import { View, StyleSheet } from "react-native";
import {
	widthPercentageToDP,
	heightPercentageToDP,
} from "react-native-responsive-screen";

const Circle = () => {
	const width = widthPercentageToDP("100%");
	const height = heightPercentageToDP("100%");
	const size = Math.min(width, height) * 0.066;

	const styles = StyleSheet.create({
		circle: {
			width: size,
			height: size,
			borderRadius: size / 2,
			backgroundColor: "red",
		},
	});

	return <View style={styles.circle} />;
};

export default Circle;
