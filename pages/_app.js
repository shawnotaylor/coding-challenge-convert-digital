import "tailwindcss/tailwind.css";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
export const API_URL = `https://${STORE_DOMAIN}/api/2021-01/graphql.json`;
export const Client = new ApolloClient({
	uri: API_URL,
	headers: {
		"X-Shopify-Storefront-Access-Token":
			process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
	},
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={Client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
