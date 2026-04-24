import { getDictionary } from "@/lib/dictionary";
import { i18n } from "@/lib/i18n/config";
import { ValuesContent } from "@/components/pages/values-content";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function ValuesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <ValuesContent dict={dict} locale={lang} />;
}