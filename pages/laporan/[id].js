/**********CMS CONTENTFUL **********/
import { client } from "../../config";

export async function getStaticProps(context) {
  const res = await client.getEntries({
    content_type: "finansial",
    "fields.slug[in]": context.params.id,
  });
  const posts = res.items[0].fields;
  return {
    props: { post: posts }, // posts will assign as a prop of component
  };
}

//setup path
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "finansial",
  });
  const posts = res.items;

  const paths = posts.map((post) => {
    return { params: { id: post.fields.slug.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

//REACT COMPONENT Start HERE
import { useRouter } from "next/router";
import LaporanDetail from "../../components/laporan/LaporanDetail";

const Laporan = ({ post }) => {
  // const { id } = useRouter().query;
  const exist = post.pdf;
  let pdfLink;
  if (exist) {
    pdfLink = post.pdf.fields.file.url;
  }
  return (
    <>
      <LaporanDetail
        key={post.slug}
        judul={post.judul}
        text={post.text}
        photo={post.photo.fields.file.url}
        pdf={pdfLink}
        post={post}
      />
      {/* <pre>{JSON.stringify(post.pdf.fields.file.url, null, 4)}</pre> */}
    </>
  );
};

export default Laporan;
