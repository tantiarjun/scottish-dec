const nodemailer = require("nodemailer");
const Bull = require("bull");

// Set up Bull queue
const emailQueue = new Bull("emailQueue", {
  redis: { host: "127.0.0.1", port: 6379 }, // Configure Redis connection
});

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AdminGmail, // Use environment variables for sensitive information
    pass: process.env.AppPassword,
  },
});

// Job processor for sending emails
emailQueue.process(async (job, done) => {
  const { mailOptionsForThePerson, mailOptionsForScottish } = job.data;

  try {
    // Send email to the person who submitted the form
    await transporter.sendMail(mailOptionsForThePerson);

    // Send email to the Scottish Hindu Foundation team
    await transporter.sendMail(mailOptionsForScottish);

    done(); // Mark job as completed
  } catch (error) {
    done(new Error("Failed to send emails")); // Mark job as failed
  }
});

// Controller for submitting contact us form data and adding email jobs to queue
exports.sendReportAnIssueFormDataViaGmail = async (req, res) => {
  const { name, email, problemtype, phone, message } = req.body;

  // Email options for the person who submitted the form
  const mailOptionsForThePerson = {
    from: process.env.AdminGmail,
    to: `${email}`,
    subject: `Issue Report Received - Scottish Hindu Foundation`,
    html: `<b>Dear ${name},</b>
           <p>Thank you for reporting an issue to the Scottish Hindu Foundation. We have successfully received your submission.</p>
           <p>Our team is currently investigating the matter and will work to resolve it as quickly as possible. If we require any additional information, we will contact you directly. Please allow us some time to investigate. We will keep you updated on the progress.</p>
           <p>Thank you for your patience and cooperation.</p>
           <p>Warm regards,<br>The Scottish Hindu Foundation Team</p>`,
  };

  // Email options for the Scottish Hindu Foundation team
  const mailOptionsForScottish = {
    from: process.env.AdminGmail,
    to: process.env.AdminGmail,
    subject: `New Issue Report from ${name}`,
    html: `<b>Hello,</b>
           <p>A user has reported an issue on the Scottish Hindu Foundation website. Below are the details provided:</p>
           <ul>
           <li>Name: ${name}</li>
           <li>Email: ${email}</li>
           <li>problemType: ${problemtype}</li>
           <li>Phone: ${phone}</li>
           <li>Message: ${message}</li>
           </ul>
           <p>Please review the reported issue and take appropriate action to resolve it.</p>
           <p>Thank you,<br>Scottish Hindu Foundation Website Team</p>`,
  };

  try {
    // Add the email job to the queue
    await emailQueue.add({ mailOptionsForThePerson, mailOptionsForScottish });

    // Send an immediate response to the client
    res.status(201).json({
      success: true,
      message: "Data received successfully. Emails will be sent shortly!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your request",
      error: error.message,
    });
  }
};
