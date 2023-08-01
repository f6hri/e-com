import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
}

export default function SEO({ title }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
