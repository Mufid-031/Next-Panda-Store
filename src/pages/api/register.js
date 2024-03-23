import { signUp } from "@/lib/firebase/service";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await signUp(req.body, (status) => {
      if (status) {
        res.status(200).json({ status: true, statusCode: 200, message: "Success" });
      } else {
        res.status(400).json({ status: false, statusCode: 400, message: "Failed" });
      }
    });
  } else {
    res.status(405).json({ status: false, statusCode: 405, message: "Method not allowed" });
  }
}
