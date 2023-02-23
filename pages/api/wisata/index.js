import wisata from "@/components/wisata";

export default async function handler(req, res) {
  res.status(200).json(wisata);
}
