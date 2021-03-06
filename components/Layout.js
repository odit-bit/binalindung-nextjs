import Header from "./Header";
import Footer from "./Footer";

import { makeStyles } from "@material-ui/core/styles";
import style from "../styles/Layout.module.css";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container>
        <main className={style.main}>{children}</main>
      </Container>
      <Footer className={style.footer} />
    </>
  );
};

export default Layout;

const useStyles = makeStyles((theme) => ({}));
