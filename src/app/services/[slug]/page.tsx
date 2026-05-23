import { services } from "../data";
import ClientPage from "./client-page";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ClientPage params={params} />;
}
