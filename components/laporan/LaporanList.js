import LaporanItem from "./LaporanItem";
import Container from "@material-ui/core/Container";

export default function LaporanList({ posts }) {
  return (
    <>
      <Container>
        {posts.map((post) => (
          <LaporanItem post={post.fields} key={post.fields.slug} />
        ))}
        {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
      </Container>
    </>
  );
}
