import Head from "next/head";
// import LaporanList from "../components/laporan/LaporanList";
// import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <>
      <h1>Selamat datang di Binalindung</h1>
      {/* <LaporanList posts={posts} /> */}
    </>
  );
}

//Get Data and assign to props function
// export async function getStaticProps() {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const posts = await res.json(); //return array of object

//   return {
//     props: { posts }, // posts will assign as a prop of component
//   };
// }
