const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export async function fetchProducts() {
  try {
    if (!STRAPI_URL || !/^https?:\/\//.test(STRAPI_URL)) {
      throw new Error(
        `❌ Invalid or missing VITE_STRAPI_URL environment variable: ${STRAPI_URL}`
      );
    }

    const baseUrl = STRAPI_URL.replace(/\/$/, "");
    const endpoint = `${baseUrl}/api/products?populate=image`;

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