import React from "react";
import Circle from "@/components/circle";
import { StyleSheet, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Circle />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
