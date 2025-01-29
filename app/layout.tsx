import "./globals.css";

export const metadata = {
  title: "Mon Calculateur de Temps",
  description: "Estimation de temps de course avec la formule de Riegel",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}