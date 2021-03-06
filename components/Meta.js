import Head from "next/head";

export default function Meta({ title, keywords, description }) {
  return (
    <div>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </div>
  );
}

Meta.defaultProps = {
  title: "Binalindung",
  keywords:
    "website rw11, Binalindung, Jaticempaka, pondok gede, bekasi, ketua rw11, pengurus, sekretariat rw11",
  description: "Situs resmi komplek Binalindung rw-11 jaticempaka pondok gede",
};
