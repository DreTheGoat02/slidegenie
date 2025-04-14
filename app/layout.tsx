export const metadata = {
  title: 'SlideGenie',
  description: 'AI-powered interactive presentation tool',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}