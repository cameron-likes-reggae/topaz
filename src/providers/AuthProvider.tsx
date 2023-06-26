import { PropsWithChildren, createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

export const AuthContext = createContext<IAuthContext>({
	user: null,
	login: () => {},
	logout: () => {},
});

interface IAuth {
	name: string;
	email: string;
}

interface IAuthContext {
	user: IAuth | null;
	login: () => void;
	logout: () => void;
}

export default function AuthProvider({ children }: PropsWithChildren) {
	const [auth, setAuth] = useState<IAuth | null>(null);

	const cookies = new Cookies();

	function getToken() {
		return cookies.get("jwt_access_token");
	}

	useEffect(() => {
		if (getToken() == "secret_cookie") {
			setAuth({
				name: "Cameron",
				email: "Cameron@gmail.com",
			});
		}
	}, []);

	function login() {
		setAuth({
			name: "Cameron",
			email: "Cameron@gmail.com",
		});
		cookies.set("jwt_access_token", "secret_cookie");
	}

	function logout() {
		setAuth(null);
		cookies.remove("jwt_access_token");
	}

	return (
		<AuthContext.Provider value={{ user: auth, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
