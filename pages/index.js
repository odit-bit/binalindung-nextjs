import { Typography } from "@material-ui/core";
import Image from "next/image";
export default function Home({ data }) {
  return (
    <div>
      <Typography variant="h2">selamat datang di Bina Lindung</Typography>
      {/* {data.map((detail) => {
        return (
          <>
            <pre>{JSON.stringify(detail.fields.title, 0, 4)}</pre>
            <pre>{JSON.stringify(detail.fields.description, 0, 4)}</pre>
            <pre>{JSON.stringify(detail.fields.file.url, 0, 4)}</pre>
          </>
        );
      })} */}
      {/* <pre>{JSON.stringify(data, 0, 4)}</pre> */}
      <br />
      <br />
      <br />
      <Typography variant="h3">{data.fields.description}</Typography>
      <Image height={400} width={400} src={"http:" + data.fields.file.url} />
    </div>
  );
}

import { client } from "../config";
export async function getStaticProps() {
  const entry = await client.getAsset("lg1tSvO4g34A8gRWRJfhg");
  // const parseEntry = client.parseEntries(entry.fields.photo);
  console.log(entry);
  return {
    props: { data: entry }, // posts will assign as a prop of component
  };
}
