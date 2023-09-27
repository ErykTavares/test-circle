import React from "react";
import { View, StyleSheet } from "react-native";

const Circle = () => {
	const styles = StyleSheet.create({
		circle: {
			width: 56.69,
			height: 56.69,
			borderRadius: "50%",
			backgroundColor: "red",
		},
	});

	return <View style={styles.circle} />;
};

export default Circle;
