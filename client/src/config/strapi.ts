const STRAPI_URL = import.meta.env.STRAPI_URL;

export async function fetchProducts() {
  try {
    const endpoint = `${STRAPI_URL.replace(/\/$/, "")}/api/products?populate=image`;
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching products from Strapi:", error);
    return [];
  }
}