import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import style from "../../styles/Kabinet.module.css";

export default function KabinetItem({ title, description, url }) {
  const classes = useStyles();
  return (
    <div className={style.avatarContainer}>
      <Avatar
        alt={title}
        src={url} //photo.file.url for contentfull cms
        className={classes.avatarLarge}
      />

      <Typography variant="body1" color="textPrimary">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  avatarLarge: {
    // width: theme.spacing(15),
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: "auto",
  },
}));
