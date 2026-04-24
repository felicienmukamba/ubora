import { getDictionary } from "@/lib/dictionary";
import { i18n } from "@/lib/i18n/config";
import { AboutContent } from "@/components/pages/about-content";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <AboutContent dict={dict} locale={lang} />;
}