import KabinetItem from "./KabinetItem";
import { makeStyles } from "@material-ui/core/styles";
import style from "../../styles/Kabinet.module.css";

export default function KabinetList({ photoList, divisi }) {
  const classes = useStyles();
  return (
    <>
      {photoList.map((photo, index) => {
        if (photo.fields.description != "Ketua Rw") {
          return (
            <div key={index}>
              <KabinetItem
                title={photo.fields.title}
                description={photo.fields.description}
                url={photo.fields.file.url}
              />
            </div>
          );
        }
      })}
      {/* <pre>{JSON.stringify(photoList.photo[0].fields, null, 4)}</pre> */}
    </>
  );
}

const useStyles = makeStyles((theme) => ({}));
