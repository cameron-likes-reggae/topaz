import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router.tsx";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { RestProvider } from "./providers/RestProvider.tsx";
const pca = new PublicClientApplication({
	auth: {
		clientId: import.meta.env.VITE_CLIENT_ID,
		authority: import.meta.env.VITE_AUTHORITY,
		redirectUri: import.meta.env.VITE_REDIRECT_URI,
	},
	cache: {
		cacheLocation: "localStorage",
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MsalProvider instance={pca}>
			<RestProvider>
				<Router />
			</RestProvider>
		</MsalProvider>
	</React.StrictMode>
);
