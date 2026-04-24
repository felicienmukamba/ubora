import { getDictionary } from "@/lib/dictionary";
import { i18n } from "@/lib/i18n/config";
import { ContactContent } from "@/components/pages/contact-content";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <ContactContent dict={dict} />;
}