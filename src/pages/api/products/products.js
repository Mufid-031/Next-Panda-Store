export default async function handler(req, res) {
  const response = await fetch("https://fakestoreapi.com/products");
  const responseJson = await response.json();
  res.status(200).json(responseJson);
}
