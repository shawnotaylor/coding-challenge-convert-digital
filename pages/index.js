import Head from "next/head";
import { getProductBySlug } from "../lib/api";
import { Client } from "../pages/_app";

export async function getStaticProps() {
	const { data } = await Client.query({
		query: getProductBySlug,
	});
	return {
		props: {
			data: data,
		},
	};
}

export default function Home({ data }) {
	const product = data.productByHandle;

	console.log(product);
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>{product.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				render a product page here.
			</main>

			<footer className="flex items-center justify-center w-full h-24 border-t">
				footer
			</footer>
		</div>
	);
}
