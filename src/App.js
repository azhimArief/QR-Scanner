import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
} from "@material-ui/core"; // to import material UI
import { QrReader } from "react-qr-reader";

function App() {
  const [data, setData] = useState("");
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}>Scan Qr Code with React</h2>
        <CardContent>
          <Grid container spacing={2}>
            <br></br>
            <br></br>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <QrReader
                delay={300}
                style={{ width: "100%" }}
                onResult={(result, error) => {
                  if (!!result) {
                    setData(result?.text);
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
              />
              <h3>Scanned Code:</h3>
              <a>{data}</a>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#3f51b5",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));
export default App;
