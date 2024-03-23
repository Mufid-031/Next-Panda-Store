export default async function handler(req, res, params, id) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const responseJson = await response.json();
  res.status(200).json(responseJson);
}
