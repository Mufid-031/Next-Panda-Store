import { retrieveData } from "@/lib/firebase/service";

export default async function handler(req, res) {
  const data = await retrieveData("Man");
  res.status(200).json(data);
}