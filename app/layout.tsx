import "./globals.css";

export const metadata = {
  title: "Pokémon Search App",
  description: "Search and filter Pokémon using PokeAPI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
