import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { Icons } from "../components/shared/icons";

type SurveyInviteEmailProps = {
  recipientName: string;
  surveyUrl: string;
};

export const SurveyInviteEmail = ({
  recipientName,
  surveyUrl,
}: SurveyInviteEmailProps) => (
  <Html>
    <Head />
    <Preview>Help Us Build Better Research Solutions for You!</Preview>
    <Tailwind>
      <Body className="bg-white font-sans">
        <Container className="mx-auto py-5 pb-12">
          <Icons.logo className="m-auto block size-10" />
          <Text className="text-base">Greetings from BoseIn,</Text>

          <Text className="text-base">
            At BoseIn, we believe that groundbreaking research and development
            should be accessible and affordable for businesses of all sizes. Our
            Research as a Service (RAAS) platform connects innovative companies
            like yours with talented professors and students to solve real-world
            challenges in areas such as product development, market analysis,
            and innovation.
          </Text>

          <Text className="text-base">
            As part of our ongoing efforts to improve and enhance our services,
            we invite you to participate in a quick survey. Your valuable
            feedback will help us better understand how we can support your
            business in addressing complex problems, improving efficiency, and
            fostering growth.
          </Text>

          <Section className="my-5 text-center">
            <Button
              className="inline-block rounded-md bg-zinc-900 px-4 py-2 text-base text-white no-underline"
              href={surveyUrl}
            >
              Take the Survey
            </Button>
          </Section>

          <Text className="text-base">
            We appreciate your time and insights—thank you for helping us create
            a platform that works for you.
          </Text>

          <Text className="text-base">Best Regards,</Text>

          <Text className="text-base italic">
            Unlocking Tomorrow&apos;s Innovations, Today.
          </Text>

          <Hr className="my-4 border-t-2 border-gray-300" />
          <Text className="text-sm text-gray-600">
            © {new Date().getFullYear()} BoseIn. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
