import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export default function KabinetItem({ photo }) {
  const classes = useStyles();
  return (
    <div>
      <Avatar
        alt={photo.title}
        src={photo.url} //photo.file.url for contentfull cms
        className={classes.avatarLarge}
      />

      <Typography variant="body1" color="textPrimary" component="p">
        {photo.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {photo.description}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
  },
  avatarLarge: {
    // width: theme.spacing(15),
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: "auto",
  },
}));
