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
exports.sendRegistrationFormDataViaGmail = async (req, res) => {
  const { name, email, gender, phone, address } = req.body;

  // Email options for the person who submitted the form
  const mailOptionsForThePerson = {
    from: process.env.AdminGmail,
    to: `${email}`,
    subject: `Welcome to the Scottish Hindu Foundation!`,

    html: `<b>Dear ${name},</b>

           <p>Thank you for joining the Scottish Hindu Foundation! We're thrilled to have you with us.</p>

           <p>As a member, you'll receive updates on events, exclusive invitations, and opportunities to get involved in our community.</p>

            <p>If you have any questions, feel free to reach out at ${process.env.AdminGmail}</p>
           
           <p>Best regards,<br>Scottish Hindu Foundation</p>`,
  };

  // Email options for the Scottish Hindu Foundation team
  const mailOptionsForScottish = {
    from: process.env.AdminGmail,
    to: process.env.AdminGmail,
    subject: `New Membership Submission: ${name}`,

    html: `<b>Hello,</b>
           <p>A new membership form has been submitted on the Scottish Hindu Foundation website. Below are the details of the new member:</p>
           <ul>
           <li>Name: ${name}</li>
           <li>Email: ${email}</li> 
           <li>Phone: ${phone}</li>
           <li>Gender: ${gender}</li>
           <li>Address: ${address}</li>
           </ul>
           <p>Please review the information and take the necessary actions to welcome the new member. </p>
           <p>Best regards,<br>Scottish Hindu Foundation</p>`,
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
