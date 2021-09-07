import { gql } from "@apollo/client";
export const getProductQuery = gql`
	query getProductBySlug {
		productByHandle(handle: "184-blinks-long-sleeve-shirt-black-212") {
			id
			handle
			availableForSale
			title
			productType
			vendor
			tags
			description
			descriptionHtml
			tags
			options {
				id
				name
				values
			}
			priceRange {
				maxVariantPrice {
					amount
					currencyCode
				}
				minVariantPrice {
					amount
					currencyCode
				}
			}
			variants(first: 100) {
				pageInfo {
					hasNextPage
					hasPreviousPage
				}
				edges {
					node {
						id
						title
						sku
						availableForSale
						quantityAvailable
						requiresShipping
						selectedOptions {
							name
							value
						}
						priceV2 {
							amount
							currencyCode
						}
						compareAtPriceV2 {
							amount
							currencyCode
						}
					}
				}
			}
			images(first: 25) {
				pageInfo {
					hasNextPage
					hasPreviousPage
				}
				edges {
					node {
						originalSrc
						altText
						width
						height
					}
				}
			}
		}
	}
`;

export default getProductQuery;
