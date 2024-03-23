import { retrieveData } from "@/lib/firebase/service";

export default async function handler(req, res) {
  const id = "2Oh9f9TYOtfIjN4MaacJ";
  const data = await retrieveData("products");
  res.status(200).json(data);
}
