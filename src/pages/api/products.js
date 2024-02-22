export default async function handler(req, res) {
  res.status(200).json(await fetch("https://fakestoreapi.com/products"));
}