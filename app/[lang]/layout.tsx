import { getDictionary } from "@/lib/dictionary";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <Header dict={dict} locale={lang} />
      {children}
      <Footer dict={dict} locale={lang} />
    </div>
  );
}