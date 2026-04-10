import nodemailer from "nodemailer"

export const sendVerificationEmail = async (email: string, token: string) => {
    // console.log(email, token)

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
            user: process.env.APP_USER,
            pass: process.env.APP_PASSWORD,
        },
    });


    const verifyLink = `${process.env.APP_URL}/auth/verify-email/${token}`;

    await transporter.sendMail({
        from: "ssltbdweb@gmail.com",
        to: email,
        subject: "Verify Your Email",
        html: `
            <!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email Verification</title>
</head>

<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,0.05);">

<tr>
<td style="background:#0d6efd;padding:20px;text-align:center;color:white;font-size:22px;font-weight:bold;">
Verify Your Email
</td>
</tr>

<tr>
<td style="padding:30px;text-align:center;color:#333;font-size:16px;line-height:1.6;">
<h2 style="margin-top:0;">Welcome!</h2>
<p>Thanks for signing up. Please confirm your email address by clicking the button below.</p>

<a href="${verifyLink}" 
style="display:inline-block;margin-top:20px;padding:14px 28px;background:#28a745;color:white;text-decoration:none;border-radius:5px;font-weight:bold;">
Verify Email </a>

<p style="margin-top:30px;font-size:14px;color:#777;">
If you did not create an account, you can safely ignore this email.
</p>

<p style="margin-top:10px;font-size:14px;color:#777;">
Or copy this link and paste it into your browser:
</p>

<p style="word-break:break-all;color:#0d6efd;">
${verifyLink}
</p>

</td>
</tr>

<tr>
<td style="background:#f1f3f5;padding:15px;text-align:center;font-size:12px;color:#888;">
© 2026 Your Company. All rights reserved.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>

        `
    });
};
