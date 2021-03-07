import { getData } from "../../config/contentful";
export async function getStaticProps() {
  const entry = await getData(process.env.CONTENTFUL_KABINET_ENTRY_ID);
  return {
    props: { kabinet: entry.fields.anggota }, // posts will assign as a prop of component
  };
}

/**************************/

//REACT COMPONENT from HERE
import KabinetItem from "../../components/Kabinet/KabinetItem";
import KabinetTab from "../../components/Kabinet/KabinetTab";

export default function index({ kabinet }) {
  return (
    <div>
      {/* ketua rw detail Only */}
      <KabinetItem
        title={kabinet.ketua.nama}
        description={kabinet.ketua.jabatan}
        url={kabinet.ketua.image}
      />
      {/* rest of detail */}
      <KabinetTab KabinetTab={kabinet} />
    </div>
  );
}
