import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const urbanist = Urbanist({
  subsets: ["latin"]
});

// Configuración de la URL base para metadatos absolutos
export const metadataBase = new URL('https://ipvdu-beta.vercel.app');

// Configuración del viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  title: "Instituto Provincial de Vivienda y Desarrollo Urbano - Tucumán",
  description: "Sitio oficial del Instituto Provincial de Vivienda y Desarrollo Urbano de Tucumán. Información sobre trámites, obras, noticias y servicios para la comunidad.",
  keywords: [
    "IPVDU", "vivienda", "desarrollo urbano", "Tucumán", "obras públicas",
    "trámites", "ipv", "instituto", "provincial", "vivienda social",
    "urbanismo sustentable", "barrios tucumanos", "créditos hipotecarios",
    "plan de viviendas"
  ],
  authors: [{ name: "IPVDU Tucumán", url: "https://ipvdu-beta.vercel.app" }],
  creator: "IPVDU Tucumán",
  publisher: "IPVDU Tucumán",
  category: "Government",
  applicationName: "IPVDU Tucumán",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Configuración para alternativas de idioma (futuras traducciones)
  alternates: {
    canonical: 'https://ipvdu-beta.vercel.app',
    languages: {
      'es-AR': 'https://ipvdu-beta.vercel.app',
      // Preparado para futuras traducciones
      // 'en-US': 'https://ipvdu-beta.vercel.app/en',
    },
  },

  // Metadatos de ubicación geográfica
  other: {
    'geo.position': '-26.8241;-65.2226',
    'geo.region': 'AR-T',
    'geo.placename': 'San Miguel de Tucumán, Tucumán',
    'ICBM': '-26.8241, -65.2226',
    'DC.title': 'Instituto Provincial de Vivienda y Desarrollo Urbano - Tucumán',
    'DC.description': 'Sitio oficial del Instituto Provincial de Vivienda y Desarrollo Urbano de Tucumán',
    'DC.publisher': 'IPVDU Tucumán',
    'DC.creator': 'IPVDU Tucumán',
    'DC.language': 'es-AR',
    'DC.rights': '© 2023 IPVDU Tucumán. Todos los derechos reservados.',
    'DC.subject': 'vivienda, desarrollo urbano, Tucumán, obras públicas',
    'schema:organization': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "name": "Instituto Provincial de Vivienda y Desarrollo Urbano de Tucumán",
      "alternateName": "IPVDU Tucumán",
      "url": "https://ipvdu-beta.vercel.app",
      "logo": "https://ipvdu-beta.vercel.app/images/twitter-image.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+54-381-4228825",
        "contactType": "customer service",
        "areaServed": "AR-T",
        "availableLanguage": "Spanish"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Muñecas 455",
        "addressLocality": "San Miguel de Tucumán",
        "addressRegion": "Tucumán",
        "postalCode": "T4000",
        "addressCountry": "AR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.8241,
        "longitude": -65.2226
      }
    }),
    'mobile-web-app-capable': 'yes',
  },

  // Configuración de iconos responsivos
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },

  // Configuración de manifest para PWA
  manifest: '/manifest.json',

  // Configuración de OpenGraph única
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ipvdu-beta.vercel.app/",
    title: "Instituto Provincial de Vivienda y Desarrollo Urbano - Tucumán",
    description: "Sitio oficial del Instituto Provincial de Vivienda y Desarrollo Urbano de Tucumán",
    siteName: "IPVDU Tucumán",
    images: [{
      url: "/images/twitter-image.png",
      width: 1200,
      height: 630,
      alt: "IPVDU Tucumán"
    }],
    countryName: "Argentina",
  },

  // Twitter Cards ampliadas
  twitter: {
    card: "summary_large_image",
    title: "Instituto Provincial de Vivienda y Desarrollo Urbano - Tucumán",
    description: "Sitio oficial del Instituto Provincial de Vivienda y Desarrollo Urbano de Tucumán",
    images: [{
      url: "/images/twitter-image.png",
      alt: "Instituto Provincial de Vivienda y Desarrollo Urbano de Tucumán"
    }],
    creator: "@IPVDUTucuman",
    site: "@IPVDUTucuman",
  },

  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verificación de propiedad del sitio
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    me: ['ipvdu-tucuman@example.com'],
  },

  // Políticas de privacidad y términos
  appleWebApp: {
    title: "IPVDU Tucumán",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body suppressHydrationWarning={true}
        className={urbanist.className}>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
