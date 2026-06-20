import { Helmet } from 'react-helmet-async';

const SEOHead = ({ title, description }) => {
  const fullTitle = `${title} | Rasid Ekbal`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
    </Helmet>
  );
};

export default SEOHead;
