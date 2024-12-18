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
exports.sendContactUsFormDataViaGmail = async (req, res) => {
  const { name, email, location, phone, message } = req.body;

  // Email options for the person who submitted the form
  const mailOptionsForThePerson = {
    from: process.env.AdminGmail,
    to: `${email}`,
    subject: `Thank You for Contacting Scottish Hindu Foundation!`,
    html: `<b>Dear ${name},</b>
           <p>Thank you for reaching out to Scottish Hindu Foundation! We have received your inquiry and appreciate you taking the time to contact us.</p>
           <p>Our team is currently reviewing your message and will get back to you as soon as possible.</p>
           <p>Thank you for your patience, and we look forward to assisting you.</p>
           <p>Warm regards,<br>Scottish Hindu Foundation Team</p>`,
  };

  // Email options for the Scottish Hindu Foundation team
  const mailOptionsForScottish = {
    from: process.env.AdminGmail,
    to: process.env.AdminGmail,
    subject: `New Contact Inquiry from ${name}`,
    html: `<b>Hello,</b>
           <p>You have received a new contact inquiry from a user on the Scottish Hindu Foundation website. Here are the details of the user’s message:</p>
           <ul>
           <li>Name: ${name}</li>
           <li>Email: ${email}</li>
           <li>Location: ${location}</li>
           <li>Phone: ${phone}</li>
           <li>Message: ${message}</li>
           </ul>
           <p>Please review the message and follow up with the user as needed.</p>
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
