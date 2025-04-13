import { SurveyInviteEmail } from "@/emails/survey-invite-email";
import { Resend } from "resend";

import { siteConfig } from "@/config/site";

const resend = new Resend(env.RESEND_API_KEY);

export type EmailRecipient = {
  email: string;
  name?: string;
};

export async function sendBulkSurveyEmails(recipients: EmailRecipient[]) {
  const results = {
    successful: [] as string[],
    failed: [] as { email: string; error: string }[],
  };

  // Process emails in batches of 10 to avoid rate limits
  const batchSize = 10;
  for (let i = 0; i < recipients.length; i += batchSize) {
    const batch = recipients.slice(i, i + batchSize);

    await Promise.all(
      batch.map(async (recipient) => {
        try {
          const { data, error } = await resend.emails.send({
            from: `BoseIn <no-reply@${siteConfig.domain}>`,
            to:
              process.env.NODE_ENV === "development"
                ? "delivered@resend.dev"
                : recipient.email,
            subject:
              "Got 2 Minutes? Help Us Build Better Research Solutions for You!",
            react: SurveyInviteEmail({
              recipientName: recipient.name || "Valued Customer",
              surveyUrl: `${siteConfig.url}/survey`, // Adjust this URL as needed
            }),
            headers: {
              "X-Entity-Ref-ID": `${Date.now()}-${recipient.email}`,
            },
          });

          if (error) throw new Error(error.message);
          results.successful.push(recipient.email);
        } catch (error) {
          results.failed.push({
            email: recipient.email,
            error: error instanceof Error ? error.message : "Unknown error",
          });
        }
      }),
    );

    // Add a small delay between batches
    if (i + batchSize < recipients.length) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  return results;
}
