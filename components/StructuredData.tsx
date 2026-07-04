const siteUrl = "https://www.socialsagency.dk";
const logoUrl = `${siteUrl}/logo.png`;

const sameAs = [
  "https://www.instagram.com/socials_agency_/",
  "https://www.linkedin.com/in/anjalouiselehmann/",
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Socials Agency",
  url: siteUrl,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Socials Agency",
  url: siteUrl,
  logo: logoUrl,
  email: "contact@socialsagency.dk",
  telephone: "+4528139031",
  founder: {
    "@type": "Person",
    name: "Anja Lehmann",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "CVR",
    value: "45775054",
  },
  sameAs,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Socials Agency",
  image: logoUrl,
  url: siteUrl,
  telephone: "+4528139031",
  email: "contact@socialsagency.dk",
  founder: {
    "@type": "Person",
    name: "Anja Lehmann",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "DK",
  },
  sameAs,
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
