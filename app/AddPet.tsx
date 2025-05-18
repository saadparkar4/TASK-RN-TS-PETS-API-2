import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { createPet } from "@/api/pets";
import { useMutation } from "@tanstack/react-query";

const AddPet = () => {
	const [formatData, setFormatData] = useState({
		id: null,
		name: "",
		description: "",
		type: "",
		image: "",
		adopted: false,
	});
	//Create
	const { mutate, data, isPending } = useMutation({
		mutationFn: () => createPet(formatData),
		mutationKey: ["CreatePet"],
		onSuccess: () => {
			alert("Success");
		},
		onError: () => {
			alert("Something Went Wrong");
		},
	});

	const handleCreatePet = () => {
		mutate();
		// console.log("server data", data);
	};

	return (
		<View style={styles.container}>
			{isPending ? "Pending" : "Not Pending"}
			<Text style={styles.title}>Add Your Pet! </Text>
			<TextInput placeholder="Name" style={styles.input} />
			<TextInput placeholder="Description" style={styles.input} />
			<TextInput placeholder="Type" style={styles.input} />
			<TextInput placeholder="Image" style={styles.input} />
			<TextInput placeholder="Adopted" style={styles.input} />

			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText} onPress={handleCreatePet}>
					Add Pet
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AddPet;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f9e3be",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		margin: 10,
	},
	input: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 10,
		margin: 10,
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
