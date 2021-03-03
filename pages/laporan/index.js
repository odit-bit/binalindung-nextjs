import LaporanList from "../../components/laporan/LaporanList";

export default function LaporanIndex({ posts }) {
  return (
    <>
      <div>
        <LaporanList posts={posts} />
      </div>
    </>
  );
}

/**COntentful CMS */
import { client } from "../../config";
export async function getStaticProps() {
  const contentful = require("contentful");

  //getSpecified entries '{content_type': '<brand_content_type_id>}'
  const res = await client.getEntries({
    content_type: "finansial",
  });
  const posts = res.items;

  return {
    props: { posts }, // posts will assign as a prop of component
  };
}
