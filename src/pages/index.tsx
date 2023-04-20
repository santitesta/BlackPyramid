// pages/index.js
import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialSection from "../components/TestimonialSection";
import GallerySection from "../components/GallerySection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import DevelopmentBanner from "../components/DevelopmentBanner";

const banner = true;

export default function Home() {
  if (banner) return <DevelopmentBanner companyName="BlackPyramid" />;
  return (
    <>
      <Head>
        <title>Camcon?</title>
        <meta
          name="description"
          content="A brief description of your startup and its offerings"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Your Startup - Homepage" />
        <meta
          property="og:description"
          content="A brief description of your startup and its offerings"
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Startup - Homepage" />
        <meta
          name="twitter:description"
          content="A brief description of your startup and its offerings"
        />
        <meta
          name="twitter:image"
          content="https://example.com/twitter-image.jpg"
        />
      </Head>
      <main>
        <Header />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TestimonialSection />
        <GallerySection />
        <PricingSection />
        <FAQSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
