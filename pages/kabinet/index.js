// Query from CMS
import { client } from "../../config";
export async function getStaticProps() {
  const entry = await client.getEntry("7dUUk9G70us0stM3XAtR5L");
  const parseEntry = client.parseEntries(entry.fields.photo);
  return {
    props: { photos: parseEntry }, // posts will assign as a prop of component
  };
}

/**************************/

//REACT COMPONENT from HERE
import KabinetItem from "../../components/Kabinet/KabinetItem";
import KabinetList from "../../components/Kabinet/KabinetList";
import KabinetTab from "../../components/Kabinet/KabinetTab";

export default function index({ photos }) {
  return (
    <div>
      <KabinetItem
        title={photos[0].fields.title}
        description={photos[0].fields.description}
        url={photos[0].fields.file.url}
      />
      <KabinetTab photos={photos} />
    </div>
  );
}
