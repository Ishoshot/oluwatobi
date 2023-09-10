const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405, // Method Not Allowed
      body: JSON.stringify({ error: 'Invalid HTTP method. Use POST.' }),
    };
  }

  try {
    // Parse the incoming JSON data
    const { data, email } = JSON.parse(event.body);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail' or 'SendGrid'
      auth: {
        user: 'ishoshot@gamil.com',
        pass: 'ishoshot',
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'ishoshot@gamil.com',
      to: email,
      subject: 'Your Subject',
      text: data.join('\n'), // Convert the data array to a string
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email could not be sent' }),
    };
  }
};
