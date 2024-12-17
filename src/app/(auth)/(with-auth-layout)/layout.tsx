export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>inner layout</h1>
        {children}
      </body>
    </html>
  );
}