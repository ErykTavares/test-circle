import React from "react";
import { View, StyleSheet } from "react-native";

const Circle = () => {
	const styles = StyleSheet.create({
		circle: {
			width: 70,
			height: 70,
			borderRadius: 70,
			backgroundColor: "red",
		},
	});

	return <View style={styles.circle} />;
};

export default Circle;
