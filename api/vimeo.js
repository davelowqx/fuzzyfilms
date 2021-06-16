import axios from "axios";

export default async (req, res) => {
  try {
    await axios({
      method: "GET",
      url: `https://api.vimeo.com/users/108911392/videos`,
    });

    res.status(200).json({ message: "Submission has been sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Submission has failed" });
  }
};
