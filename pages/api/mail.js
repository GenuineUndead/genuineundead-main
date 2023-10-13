const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

const FROM_ADDRESS = "contact@genuineundead.io";
const TO_ADDRESS = "thegenuineundead@gmail.com";

export default async function handler(req, res) {
  let { email, subject, message } = req.body;
  if (req.method !== "POST") {
    return res.status(404).json({
      message: "Endpoint was not found or does not support this method.",
    });
  }
  if (!email || !subject || !message) {
    res
      .status(400)
      .json({ message: "All fields must be present to send email." });
  }

  let emailMessage = `
    Sender: ${email}\r\n
    Message: ${message}
  `;

  try {
    const emailData = {
      to: TO_ADDRESS,
      from: FROM_ADDRESS,
      subject,
      text: emailMessage,
      html: emailMessage.replace(/\r\n/g, "<br />"),
    };

    await mail.send(emailData);
    res.status(200).json({ message: "Successfully sent email" });
  } catch (err) {
    console.log(err.response.body);
    res.status(500).json({ message: err.message });
  }
}
