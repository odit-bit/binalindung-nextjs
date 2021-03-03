import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Link from "../../src/Link";

export default function LaporanDetail({ judul, text, photo, pdf, post }) {
  return (
    <>
      <div align="center">
        <Typography variant="h5">{judul}</Typography>
        <Typography variant="body2">{text}</Typography>
        {/* <img src={post.photo.fields.file.url} /> */}
        <Image
          src={"http:" + photo}
          layout="intrinsic"
          width={800}
          height={450}
        />
        {pdf && <Link href={pdf}>Download PDF</Link>}
        {/* <pre>{JSON.stringify(post.pdf.fields.file.url, null, 4)}</pre> */}
      </div>
    </>
  );
}
