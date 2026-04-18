export const metadata = {
  title: "Mind Set Form",
  description: "Nutrition Office Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}