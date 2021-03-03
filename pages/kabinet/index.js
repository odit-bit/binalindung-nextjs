import KabinetList from "../../components/Kabinet/KabinetList";

export default function index({ photos }) {
  // const kabinetData = "cihuy";
  return (
    <div>
      <KabinetList photoList={photos} />
    </div>
  );
}

// JSONPlaceHolder;
export async function getStaticProps() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=5`
  );
  const photos = await res.json(); //return array of object

  return {
    props: { photos }, // posts will assign as a prop of component
  };
}

/*******COntentfull CMS**********/
// export async function getStaticProps() {
//   const contentful = require("contentful");

//   //initialize contentful client
//   const client = contentful.createClient({
//     space: "b9js7d88yumm",
//     accessToken: "aoWZMkpdhNyml2t_2S4SXeXC8P9UMA0ub6M1dhyN2io",
//   });

//   const res = await client.getEntry("6cfRDZ5myMTvI0okwTuUjH");
//   const photos = res.fields.photo;

//   return {
//     props: { photos }, // posts will assign as a prop of component
//   };
// }
