import { AppBar, Container, Paper } from "@material-ui/core";
import KabinetItem from "./KabinetItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export default function KabinetList({ photoList }) {
  const classes = useStyles();
  return (
    <Container maxWidth="md" style={{ padding: 20 }}>
      <Korbid photoList={photoList} divisi="Pengurus" />
      <Korbid photoList={photoList} divisi="Koordinator Bidang" />
      {/* <pre>{JSON.stringify(photoList.photo[0].fields, null, 4)}</pre> */}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  text: {
    marginBottom: theme.spacing(4),
  },
}));

const Korbid = ({ photoList, divisi }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.text}>
        <Typography align="center" variant="h5">
          {divisi}
        </Typography>
      </div>
      <Grid container justify="center" spacing={2} margin="auto">
        {photoList.map((photo) => {
          return (
            <Grid item xs={6} sm={4}>
              {/* photo.field for Contentful CMS */}
              <KabinetItem photo={photo} />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};
