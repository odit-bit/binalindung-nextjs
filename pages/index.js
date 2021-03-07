import { Typography } from "@material-ui/core";
import Image from "next/image";

export default function Home({ data }) {
  return (
    <div>
      <Typography variant="h4">selamat datang di Bina Lindung</Typography>
      <br />
      <br />
      <br />
      <article>
        <Typography variant="h5">
          WEBSITE SAAT INI DALAM TAHAP PENGEMBANGAN
        </Typography>
      </article>
      {/* <pre>{JSON.stringify(data, 0, 4)}</pre> */}
      <br />
      <br />
      <br />
      {/* <Image
        height={400}
        width={400}
        src={"http:" + data.fields.anggota.ketua.image}
      /> */}
    </div>
  );
}

import { getData } from "../config/contentful";
export async function getStaticProps() {
  const entry = await getData(process.env.CONTENTFUL_KABINET_ENTRY_ID);
  return {
    props: { data: entry }, // posts will assign as a prop of component
  };
}
