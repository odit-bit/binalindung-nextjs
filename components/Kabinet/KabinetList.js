import KabinetItem from "./KabinetItem";
import { makeStyles } from "@material-ui/core/styles";
import style from "../../styles/KabinetList.module.css";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function KabinetList({ KabinetList }) {
  // const classes = useStyles();
  return (
    <>
      {KabinetList.map((kabinet, index) => {
        return (
          <div key={index} className={style.container}>
            <div className={style.test}>
              <Typography variant="h6">{kabinet.divisi}</Typography>
            </div>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {kabinet.anggota.map((kabinet, index) => {
                return (
                  <div key={index}>
                    <KabinetItem
                      title={kabinet.nama}
                      description={kabinet.jabatan}
                      url={kabinet.image}
                    />
                  </div>
                );
              })}
            </Grid>
          </div>
        );
      })}
      {/* <pre>{JSON.stringify(photoList.photo[0].fields, null, 4)}</pre> */}
    </>
  );
}

// const useStyles = makeStyles((theme) => ({}));
