import { getDictionary } from "@/lib/dictionary";
import { i18n } from "@/lib/i18n/config";
import { ActivitiesContent } from "@/components/pages/activities-content";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function ActivitiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <ActivitiesContent dict={dict} locale={lang} />;
}