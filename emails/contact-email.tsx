// emails/contact-email.tsx

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

type Props = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactEmail({
  name,
  email,
  phone,
  subject,
  message,
}: Props) {
  return (
    <Html>
      <Head />

      <Preview>New website inquiry from {name}</Preview>

      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, sans-serif",
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "620px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
          }}
        >
          <Section
            style={{
              background:
                "linear-gradient(135deg,#0057ff,#0ea5e9)",
              padding: "32px",
            }}
          >
            <Heading
              style={{
                color: "#ffffff",
                margin: 0,
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              Flourishing Skies Travels
            </Heading>

            <Text
              style={{
                color: "rgba(255,255,255,0.85)",
                marginTop: "10px",
                fontSize: "15px",
              }}
            >
              New website contact inquiry received
            </Text>
          </Section>

          <Section style={{ padding: "32px" }}>
            <Text
              style={{
                fontSize: "15px",
                color: "#111827",
                marginBottom: "18px",
              }}
            >
              A new customer submitted the contact form.
            </Text>

            <Info label="Full Name" value={name} />
            <Info label="Email Address" value={email} />
            <Info label="Phone Number" value={phone} />
            <Info label="Subject" value={subject} />

            <Hr style={{ margin: "28px 0" }} />

            <Text
              style={{
                fontWeight: "700",
                color: "#111827",
                fontSize: "15px",
              }}
            >
              Message
            </Text>

            <Text
              style={{
                color: "#4b5563",
                fontSize: "15px",
                lineHeight: "28px",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

function Info({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <Section
      style={{
        marginBottom: "18px",
      }}
    >
      <Text
        style={{
          margin: 0,
          fontSize: "13px",
          color: "#6b7280",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          marginTop: "6px",
          marginBottom: 0,
          fontSize: "16px",
          color: "#111827",
          fontWeight: "500",
        }}
      >
        {value}
      </Text>
    </Section>
  )
}