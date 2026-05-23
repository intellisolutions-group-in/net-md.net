import { blogs } from "@/data/blogData";
import ClientPage from "./client-page";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage() {
  return <ClientPage />;
}
