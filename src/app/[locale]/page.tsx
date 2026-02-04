import { locales, type Locale } from "@/i18n/translations";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import RPAAuthoritySection from "@/components/RPAAuthoritySection";
import OutcomesSection from "@/components/OutcomesSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (locales.includes(rawLocale as Locale)
    ? rawLocale
    : "en") as Locale;

  return (
    <>
      <HeroSection locale={locale} />
      <SolutionsSection locale={locale} />
      <RPAAuthoritySection locale={locale} />
      <OutcomesSection locale={locale} />
      <ProductsSection locale={locale} />
      <FeaturesSection locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
