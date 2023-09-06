import { Loading, getUser, Error } from "../slice/userSlice";
import Axios from "axios";

const baseUrl = "http://localhost:3001";

export const createUser = (user) => async (dispatch) => {
	dispatch(Loading());
	try {
		const response = await fetch(`${baseUrl}/user/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		const data = await response.json();
		console.log(data);
		dispatch(getUser(data));
	} catch (error) {
		console.log(error);
		dispatch(Error(error.response));
	}
};
