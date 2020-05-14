import Head from 'components/Head';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#252525',
    minHeight: '100%',
    //position: 'relative',
  },
  contentContainer: {
    paddingBottom: '2.5rem',
    minHeight: '85vh',
  },
});

function Layout({ children, maxWidth = 'lg' }) {
  const classes = useStyles();
  return (
    <>
      <Head title="NextJS Template" />

      <Container
        className={classes.contentContainer}
        maxWidth={maxWidth}
        {...(maxWidth === false && {
          style: {
            paddingLeft: 0,
            paddingRight: 0,
            margin: 0,
            padding: 0,
          },
        })}>
        {children}
      </Container>
      {/*  <Footer /> */}
    </>
  );
}
export default Layout;
