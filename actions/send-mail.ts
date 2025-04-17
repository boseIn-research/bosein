"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  organizationType: z.enum(["company", "academia"]),
  organizationName: z.string().min(1, "Organization name is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData);

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change this based on your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${validatedData.name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${validatedData.email}</p>
          <p style="margin: 10px 0;"><strong>Organization Type:</strong> ${validatedData.organizationType === "company" ? "Company" : "Academia"}</p>
          <p style="margin: 10px 0;"><strong>Organization Name:</strong> ${validatedData.organizationName}</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #555;">Message:</h3>
          <p style="white-space: pre-wrap;">${validatedData.message}</p>
        </div>
        
        <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">
          This email was sent from your website contact form.
        </p>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${validatedData.name} from ${validatedData.organizationName}`,
      html: htmlContent,
    });

    console.log("Email sent: ", info.response);

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error. Please check your inputs.",
      };
    }
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}
