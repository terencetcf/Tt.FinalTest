import axios from "axios";
import Product from "../interfaces/Product";

export async function getProducts(): Promise<Product[]> {
  const response = await axios.get("https://localhost:44320/api/products");
  const products = response.data as Product[];
  return products;
}
