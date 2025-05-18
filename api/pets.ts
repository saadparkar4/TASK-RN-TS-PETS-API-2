import axios from "axios";
import instance from ".";
import { useQuery } from "@tanstack/react-query";

const getAllPets = async () => {
	const response = await instance.get("/pets");
	return response.data;
};

const getOnePet = async (id: string) => {
	const response = await instance.get(`/pets/${id}`);
	return response.data;
};

const createPet = async (pet: any) => {
	// const create = axios.post(`/pets/${body}`);
	const response = await instance.post(`/pets`, pet);
	return response.data;
};

export { getAllPets, getOnePet, createPet };
