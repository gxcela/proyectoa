import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";  // ← DESCOMENTA ESTA LÍNEA

export const metadata: Metadata = {
  title: "San Valentín",
  description: "Página romántica para mi pareja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className="m-0 font-sans bg-gradient-to-br from-pink-100 via-pink-200 to-purple-500 text-white min-h-screen"
      >
        <Navbar />  {/* ← DESCOMENTA ESTA LÍNEA */}
        <div className="pt-16">{children}</div>  {/* ← padding-top para navbar */}
      </body>
    </html>
  );
}
