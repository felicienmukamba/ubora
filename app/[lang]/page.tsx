import { getDictionary } from "@/lib/dictionary";
import { i18n } from "@/lib/i18n/config";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { Metrics } from "@/components/sections/metrics";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { Cta } from "@/components/sections/cta";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <main className="flex-1">
      <HeroCarousel dict={dict} locale={lang} />
      <Metrics dict={dict} />
      <Capabilities dict={dict} />
      <Process dict={dict} />
      <Cta dict={dict} locale={lang} />
    </main>
  );
}