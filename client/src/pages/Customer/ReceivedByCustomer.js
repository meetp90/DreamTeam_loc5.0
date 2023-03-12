import React from "react";
import Navbar from "../../components/Navbar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { useStyles } from "../../components/Styles";
import ProductModal from "../../components/Modal";
import clsx from "clsx";
import Loader from "../../components/Loader";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { img1 } from '../../images/web3.jpg';
import Grid from '@material-ui/core/Grid';
export default function ReceivedByCustomer(props) {
  const classes = useStyles();
  const supplyChainContract = props.supplyChainContract;
  const [count, setCount] = React.useState(0);
  const [allReceived, setAllReceived] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navItem = [
    ["Purchase Product", "/Customer/buy"],
    ["Receive Product", "/Customer/receive"],
    ["Your Products", "/Customer/allReceived"],
  ];
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const cnt = await supplyChainContract.methods.fetchProductCount().call();
      setCount(cnt);
    })();

    (async () => {
      const arr = [];
      for (var i = 1; i < count; i++) {
        const prodState = await supplyChainContract.methods
          .fetchProductState(i)
          .call();

        if (prodState === "8") {
          const prodData = [];
          const a = await supplyChainContract.methods
            .fetchProductPart1(i, "product", 0)
            .call();
          const b = await supplyChainContract.methods
            .fetchProductPart2(i, "product", 0)
            .call();
          const c = await supplyChainContract.methods
            .fetchProductPart3(i, "product", 0)
            .call();
          prodData.push(a);
          prodData.push(b);
          prodData.push(c);
          arr.push(prodData);
        }
      }
      setAllReceived(arr);
      setLoading(false);
    })();
  }, [count]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);

  const handleClose = () => setOpen(false);

  const handleClick = async (prod) => {
    await setModalData(prod);
    setOpen(true);
  };

  return (
    <>
      <div classname={classes.pageWrap}>
        <Navbar
          pageTitle={'Customer'}
          navItems={navItem}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <ProductModal
                prod={modalData}
                open={open}
                handleClose={handleClose}
              />
              <h1 className={classes.pageHeading}>Your Products</h1>
              <h3 className={classes.tableCount}>
                Total : {allReceived.length}
              </h3>
              <>
                <div>
                  {allReceived.length !== 0 ? (
                    allReceived.map((prod) => {
                      const d = new Date(parseInt(prod[1][0] * 1000));
                      return (
                        <>
                          <Grid
                            item
                            xs={4}
                            onClick={() => handleClick(prod)}>
                            <Card className={classes.root}>
                              <CardActionArea>
                                <CardMedia
                                  style={{
                                    height: '250px',
                                    paddingTop: '2%',
                                  }}
                                  component="img"
                                  image={`https://ipfs.io/ipfs/${prod[0][8]}`}
                                  title="Picture"
                                  alt="pic"
                                />
                                <CardContent>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2">
                                    {prod[1][1]}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p">
                                    Product Code: {prod[1][2]}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p">
                                    Manufacturer: {prod[0][4]}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p">
                                    Owner: {prod[0][2]}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p">
                                    Date: {d.toDateString()}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              <CardActions
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}></CardActions>
                            </Card>
                          </Grid>
                        </>
                      );
                    })
                  ) : (
                    <> </>
                  )}
                </div>
              </>
            </>
          )}
        </Navbar>
      </div>
    </>
  );
}
