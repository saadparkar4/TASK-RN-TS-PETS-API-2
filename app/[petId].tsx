import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import pets from "@/data/pets";
import { useQuery } from "@tanstack/react-query";
import { getAllPets } from "@/api/pets";

const PetDetails = () => {
	// const pet = pets[0];
	const { data, isLoading } = useQuery({
		queryKey: ["getPets"],
		queryFn: () => getAllPets(),
	});
	if (isLoading) {
		// return <Text>Hello it is loading...</Text>; // Added text
		return <ActivityIndicator size="large" color="#3498db" />; // Added Loading Spinner
	}
	const { petId } = useLocalSearchParams();
	const pet = data.find((item: any | undefined) => `${item.id}` === petId);

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{pet?.name}</Text>
			<Image source={{ uri: pet?.image }} style={styles.image} />
			<Text style={styles.description}> {pet?.description}</Text>
			<Text style={styles.type}>Type: {pet?.type}</Text>

			<View>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PetDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f9e3be",
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
	description: {
		fontSize: 16,
		marginTop: 10,
		textAlign: "center",
	},
	type: {
		fontSize: 16,
		marginTop: 10,
		textAlign: "center",
	},
	button: {
		backgroundColor: "black",
		padding: 10,
		borderRadius: 10,
		margin: 10,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});
