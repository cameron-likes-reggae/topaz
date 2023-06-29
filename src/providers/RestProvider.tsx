import { useMsal } from "@azure/msal-react";
import axios, { AxiosInstance } from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface IRestContext {
	axios: AxiosInstance;
}

export const RestContext = createContext<IRestContext>({ axios: axios });

export const RestProvider = ({ children }: PropsWithChildren) => {
	const { instance, accounts } = useMsal();

	const [accessToken, setAccessToken] = useState<string>();

	useEffect(() => {
		if (accounts[0])
			instance
				.acquireTokenSilent({
					account: accounts[0],
					scopes: ["f54163ef-de87-4126-8e77-862298e1caad/.default"],
				})
				.then((response) => {
					setAccessToken(response.accessToken);
				});
	}, [accounts]);

	const axiosInstance = axios.create({
		baseURL: "http://localhost:5000/",
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});

	return (
		<RestContext.Provider value={{ axios: axiosInstance }}>
			{children}
		</RestContext.Provider>
	);
};
