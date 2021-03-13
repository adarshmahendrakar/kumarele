import React from "react";
// import { apiCall } from "../handlers/api";
// import { MDM_PATH, PO_PATH } from "../handlers/config";
// import letterHeads from "../images/letterHeads.jpeg";
import letterHeads from "../../../images/letterHeads.jpeg";
import MaterialTable from "material-table";
import { InputLabel, TextField, Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";

const border = {
  margin: "0",
  width: "100%",
  border: "black 1px solid",
  borderCollapse: "collapse",
  textAlign: "left",
};

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper4: {
    padding: theme.spacing(1.4),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  paper2: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    width: "90%",
    height: "98%",
    marginTop: 10,
    marginLeft: 80,
    paddingTop: 250,
    // position:'absolute',
    // top:'50%',
    // left:'10%',
    // right: '10%',
    // bottom: '10%',
    // overflow:'scroll',
    // height:'100%',
    // maxHeight: 500,
    // display:'block'
  },
  paper3: {
    backgroundColor: theme.palette.background.paper,
    width: "95%",
    //  border: '2px solid #000',
    //  boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3, 4),
  },

  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  border1: {
    border: "1px solid grey",
  },
  // root: {
  //   width: '100%',
  // },
  button: {
    // marginRight: theme.spacing(2),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

class PurchaseOutputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slNo: {},
      Invoice: [],
      InvoiceDate: "",
      PoNum: "",
      RecivedDate: "",
      StoreInvoiceID: "",
      open: false,
      //  slNo: "",
      // slNo?.pay: "",
      columns: [
        //   { title: 'Sl, No.', field: 'slno' },
        // { title: "Id", field: "tableData.id", },
        { title: "Sl, No", render: (rowData) => rowData.tableData.id + 1 },
        //   { title: 'Sl, No', field: 'tableData.id', render:rowData => { return( <p>{rowData.tableData.id+1}</p> ) }, },
        {
          title: "Material Description",
          field: "productName",
          cellStyle: {
            width: 300,
            // minWidth: 300
          },
        },
        { title: "UOM", field: "uom", editable: "never", initialEditValue: "" },
        {
          title: "HSN code",
          field: "hsnCode",
          editable: "never",
          initialEditValue: "",
        },
        {
          title: "Qty",
          field: "poQuentity",
          editable: "never",
          initialEditValue: "",
          // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
        { title: "Unit Rate", field: "unitRate" },
        {
          title: "Total Amount",
          field: "totalAmount",
          editable: "never",
          initialEditValue: "",
        },
        //   { title: 'Site Engineer', field: 'siteengineer', initialEditValue: props.userDetails},
        { title: "Remarks", field: "remarks" },
      ],
    };
  }

  componentDidMount() {
    console.log("po output props", this.props.state);
    // const po = JSON.parse(sessionStorage.getItem("poObject"));
    fetch(
      "http://localhost:8186/vendor?fromSize=0&limit=20&vendorCodes=" +
        this.props.state.supplyerName
    )
      .then((response) => response.json())
      .then((data) => {
        let val = data.projects[0];
        this.setState({
          slNo: {
            ...this.state.slNo,
            supplyerName: val.vendorName,
            suplyerAddress: val.vendorPrimaryAddress,
            suplyerPhone: val.vendorPhone,
            suplyerEmail: val.vendorEmail,
            suplyerCode: val.vendorCode,
          },
        });
        console.log("slNo", this.state.slNo);
        console.log("dddattta", data.projects); 
      });

    // apiCall("get", PO_PATH + "/purchase-order/ponum/" + po.poNumber, {})
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({
    //       slNo: {
    //         ...data,
    //         pay: po.pay,
    //       },
    //     });
    //   })
    //   .catch((err) => console.log(err));

    // this.setState({ slNo: po });

    // apiCall(
    //   "get",
    //   MDM_PATH + `/vendor?fromSize=0&limit=20&vendorCodes=${po?.supplyerName}`,
    //   {}
    // )
    //   .then((res) => {
    //     let val = res.projects[0];
    //     this.setState({
    //       slNo: {
    //         ...this.props.state,
    //         supplyerName: val.vendorName,
    //         suplyerAddress: val.vendorPrimaryAddress,
    //         suplyerPhone: val.vendorPhone,
    //         suplyerEmail: val.vendorEmail,
    //       },
    //     });
    //     console.log(res, " ", this.state.slNo.supplyerName);
    //   })
    //   .catch((err) => console.log(err));
  }

  handleOpen = (data) => {
    this.setState({ open: true });
    console.log(data);
    this.setState({ slNo: data });
    // this.setState({ slNo.pay: data.pay });
    console.log("gg2", this.state.slNo?.pay.payment1);
  };

  handleClose = () => {
    this.setState({ open: false });
    // setOpen(false);
  };

  render() {
    const tableContent = this.state.slNo?.materialDescription?.map(
      (item, ind) => {
        return (
          <tr key={ind}>
            <td className="td">{ind || 1}</td>
            <td className="td">{item.productName || "."}</td>
            <td className="td">{item.uom || "."}</td>
            <td className="td">{item.poQuentity || "."}</td>
            <td className="td">{item.unitRate || "."}</td>
            <td className="td">{item.totalAmount || "."}</td>
          </tr>
        );
      }
    );

    const { classes } = this.props;

    return (
      <div>
        {/* <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          // open={this.state.open}
          open={true}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          disableEnforceFocus
        > */}
        {/* <div className={classes.paper3}>
         </div> */}
        <div
        //   style={{paddingTop: 50}}
        >
          <div
            className={classes.paper3}
            // ref={(el) => (this.componentRef = el)}
          >
            <Grid container spacing={0}>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <img
                  src={letterHeads}
                  alt="My Awesome logo"
                  width="800"
                  height="150"
                />
              </Grid>

              <Grid className={classes.border1} item xs={6}>
                <div className={classes.paper} style={{ textAlign: "left" }}>
                  {/* {this.props.state?.supplyerName} */}
                  <p>Name: {this.state.slNo?.supplyerName || "."}</p>
                  <p>Email: {this.state.slNo?.suplyerEmail || "."}</p>
                  <p>Phone: {this.state.slNo?.suplyerPhone || "."}</p>
                  <p>Address: {this.state.slNo?.suplyerAddress || "."}</p>
                  <p>Code: {this.state.slNo?.suplyerCode || "."}</p>
                </div>
              </Grid>
              <Grid
                container
                className={classes.border1}
                item
                xs={6}
                style={{ paddingLeft: 5 }}
              >
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InputLabel style={{ fontWeight: "700" }}>
                  slNo :
                  </InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-full-width"
                    placeholder=""
                    fullWidth
                    margin="8"
                    InputLabelProps={{}}
                    value={this.props.state?.slNo}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InputLabel style={{ fontWeight: "700" }}>
                  Invoice Date :
                  </InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-full-width"
                    placeholder=""
                    fullWidth
                    margin="8"
                    InputLabelProps={{}}
                    value={this.props.state?.enterRefNumberDate}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InputLabel style={{ fontWeight: "700" }}>
                    Invoice Number :
                  </InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-full-width"
                    placeholder=""
                    fullWidth
                    margin="8"
                    InputLabelProps={{}}
                    value={this.props.state?.InvoiceNumber}
                  />
                </Grid>
               
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InputLabel style={{ fontWeight: "700" }}>
                  PoNum :
                  </InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-full-width"
                    placeholder=""
                    fullWidth
                    margin="8"
                    InputLabelProps={{}}
                    value={this.props.state?.project}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InputLabel style={{ fontWeight: "700" }}>
                    Recived Date :
                  </InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-full-width"
                    placeholder=""
                    fullWidth
                    margin="8"
                    InputLabelProps={{}}
                    value={this.props.state?.endCustomer}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InputLabel style={{ fontWeight: "700" }}>
                    Store Invoice ID :
                  </InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-full-width"
                    placeholder=""
                    fullWidth
                    margin="8"
                    InputLabelProps={{}}
                    value={this.props.state?.endCustomer}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InputLabel style={{ fontWeight: "700" }}>
                    Actions:
                  </InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-full-width"
                    placeholder=""
                    fullWidth
                    margin="8"
                    InputLabelProps={{}}
                    value={this.props.state?.endCustomer}
                  />
                </Grid>
              </Grid>

              <Grid className={classes.border1} item xs={12}>
                <Paper className={classes.paper} style={{ textAlign: "left" }}>
                  Dear Sir, We are pleased to entrust you with the order for the
                  goods/services mentioned below subject to the terms and
                  conditions given below. Please send us your order acceptance
                  per return.
                </Paper>
              </Grid>

              <Grid className={classes.border1} item xs={12}>
                <MaterialTable
                  title="Select Material"
                  options={{
                    search: false,
                    headerStyle: {
                      fontWeight: 900,
                      borderTopWidth: 5,
                      borderTopColor: "gray",
                    },
                    //pageSizeOptions: [5, 10, 20, { value: data.length, label: 'All' }],
                    toolbar: false,
                    paging: false,
                  }}
                  columns={this.state.columns}
                  data={this.props.state?.materialDescription}
                />
              </Grid>
              {/*  */}

              <Grid className={classes.border1} item xs>
                <Grid container spacing={0}>
                  <Grid className={classes.border1} item xs={2}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Delivery Date</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={10}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>{this.props.state?.delivery}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={2}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Inco Terms</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={10}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>{this.props.state?.incomeTerms}</div>
                    {/* </Paper> */}
                  </Grid>

                  <Grid className={classes.border1} item xs={2}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Payment Terms</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={10}>
                    <Grid container spacing={0}>
                      <Grid className={classes.border1} item xs={1}>
                        {/* <Paper
                          className={classes.paper}
                          style={{ height: "100%", textAlign: "left" }}
                        > */}
                        <div>1</div>
                        {/* </Paper> */}
                      </Grid>
                      <Grid className={classes.border1} item xs={11}>
                        {/* <Paper
                          className={classes.paper}
                          style={{ height: "100%", textAlign: "left" }}
                        > */}
                        <div>{this.props.state?.pay?.payment1}</div>
                        {/* </Paper> */}
                      </Grid>
                      <Grid className={classes.border1} item xs={1}>
                        {/* <Paper
                          className={classes.paper}
                          style={{ height: "100%", textAlign: "left" }}
                        > */}
                        <div>2</div>
                        {/* </Paper> */}
                      </Grid>
                      <Grid className={classes.border1} item xs={11}>
                        {/* <Paper
                          className={classes.paper}
                          style={{ height: "100%", textAlign: "left" }}
                        > */}
                        <div>{this.props.state?.pay?.payment2}</div>
                        {/* </Paper> */}
                      </Grid>
                      <Grid className={classes.border1} item xs={1}>
                        {/* <Paper
                          className={classes.paper}
                          style={{ height: "100%", textAlign: "left" }}
                        > */}
                        <div>3</div>
                        {/* </Paper> */}
                      </Grid>
                      <Grid className={classes.border1} item xs={11}>
                        {/* <Paper
                          className={classes.paper}
                          style={{ height: "100%", textAlign: "left" }}
                        > */}
                        <div>{this.props.state?.pay?.payment3}</div>
                        {/* </Paper> */}
                      </Grid>
                      <Grid className={classes.border1} item xs={1}>
                        {/* <Paper
                          className={classes.paper}
                          style={{ height: "100%", textAlign: "left" }}
                        > */}
                        <div>4</div>
                        {/* </Paper> */}
                      </Grid>
                      <Grid className={classes.border1} item xs={11}>
                        {/* <Paper
                          className={classes.paper}
                          style={{ height: "100%", textAlign: "left" }}
                        > */}
                        <div>{this.props.state?.pay?.payment4}</div>
                        {/* </Paper> */}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid className={classes.border1} item xs={2}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Warrenty</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={10}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>{this.props.state?.warrentry}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={2}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>ABG</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={10}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>{this.props.state?.abg}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={2}>
                    {/* <Paper
                      className={classes.paper1}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>PBG</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={10}>
                    {/* <Paper
                      className={classes.paper1}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>{this.props.state?.pbg}</div>
                    {/* </Paper> */}
                  </Grid>
                </Grid>
              </Grid>

              <Grid className={classes.border1} xs={6} sm={6}>
                <Grid container spacing={0} style={{ height: "100%" }}>
                  <Grid className={classes.border1} item xs={8}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Sub Total Amount </div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "right" }}
                    > */}
                    <div>{this.props.state?.subTotal}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>CGST</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "center" }}
                    > */}
                    <div>{this.props.state?.cgst ? "9%" : "0%"}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "right" }}
                    > */}
                    <div>{this.props.state?.cgst}</div>
                    {/* </Paper> */}
                  </Grid>

                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>SGST</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "center" }}
                    > */}
                    <div>{this.props.state?.sgst ? "9%" : "0%"}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "right" }}
                    > */}
                    <div>{this.props.state?.sgst}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>IGST</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "center" }}
                    > */}
                    <div>{this.props.state?.igst ? "18%" : "0%"}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "right" }}
                    > */}
                    <div>{this.props.state?.igst}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={8}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Freight</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "right" }}
                    > */}
                    <div>{this.props.state?.freight}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={8}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Insurance</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "right" }}
                    > */}
                    <div>{this.props.state?.insurence}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={8}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Packing and Forwarding</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "right" }}
                    > */}
                    <div>{this.props.state?.packingAndForwarding}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={8}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Grand Total Amount </div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={4}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "right" }}
                    > */}
                    <div>{this.props.state?.grandTotalAmount}</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={2}>
                    {/* <Paper
                      className={classes.paper1}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>In Words</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={10}>
                    {/* <Paper
                      className={classes.paper1}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>{this.props.state?.inWords}</div>
                    {/* </Paper> */}
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item xs={12} /> */}

              <Grid container className={classes.border1} xs={12} sm={12}>
                <Grid className={classes.border1} item xs={3}>
                  {/* <Paper
                    className={classes.paper1}
                    style={{
                      height: "100%",
                      textAlign: "left",
                      borderRight: "1px solid gray",
                      borderRadius: "0",
                    }}
                  > */}
                  <div>Technical Document Submission</div>
                  {/* </Paper> */}
                </Grid>
                <Grid xs={9}>
                  {/* <Paper
                    className={classes.paper1}
                    style={{ height: "100%", textAlign: "left" }}
                  > */}
                  <div>{this.props.state?.technocalDiscount}</div>
                  {/* </Paper> */}
                </Grid>
              </Grid>

              <Grid container className={classes.border1} xs={12} sm={12}>
                <Grid
                  style={{ borderRight: "1px solid gray", borderRadius: "0" }}
                  item
                  xs={3}
                >
                  {/* <Paper
                    className={classes.paper1}
                    style={{
                      // height: "100%",
                      textAlign: "left",
                      borderRight: "1px solid gray",
                      borderRadius: "0",
                    }}
                  > */}
                  <div
                  // style={{ borderRight: "1px solid gray", borderRadius: "0" }}
                  >
                    Manufacturing Clerance
                  </div>
                  {/* </Paper> */}
                </Grid>
                <Grid xs={9}>
                  {/* <Paper
                    className={classes.paper1}
                    style={{
                      //  height: "100%",
                      textAlign: "left",
                    }}
                  > */}
                  <div>{this.props.state?.manufacture}</div>
                  {/* </Paper> */}
                </Grid>
              </Grid>

              <Grid container className={classes.border1} xs={12} sm={12}>
                <Grid
                  style={{ borderRight: "1px solid gray", borderRadius: "0" }}
                  item
                  xs={3}
                >
                  {/* <Paper
                    className={classes.paper1}
                    style={{
                      // height: "100%",
                      textAlign: "left",
                      borderRight: "1px solid gray",
                      borderRadius: "0",
                    }}
                  > */}
                  <div
                  // style={{ borderRight: "1px solid gray", borderRadius: "0" }}
                  >
                    Inspection
                  </div>
                  {/* </Paper> */}
                </Grid>
                <Grid xs={9}>
                  {/* <Paper
                    className={classes.paper1}
                    style={{
                      //  height: "100%",
                      textAlign: "left",
                    }}
                  > */}
                  <div>{this.props.state?.inspection}</div>
                  {/* </Paper> */}
                </Grid>
              </Grid>

              <Grid className={classes.border1} item xs={6}>
                <Grid container spacing={0} style={{ height: "100%" }}>
                  <Grid
                    // className={classes.border1}
                    style={{
                      height: "100%",
                      borderRight: "1px solid gray",
                      borderRadius: "0",
                    }}
                    item
                    xs={3}
                  >
                    {/* <Paper
                      className={classes.paper1}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div style={{ height: "100%" }}>Bill To :</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid
                    // className={classes.border1}
                    style={{
                      height: "100%",
                      // borderRight: "1px solid gray",
                      // borderRadius: "0",
                    }}
                    item
                    xs={9}
                  >
                    {/* <Paper
                      className={classes.paper1}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>
                      {/* M/s Kumar Electricals,
                               #8(S), Ist Stage, Ist Phase,
                               Chandra Layout, Vijayanagar,
                               Bangalore-560040.
                               GST NO: 29AALFM0471E1ZA */}
                      {this.props.state?.billTo}
                    </div>
                    {/* </Paper> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.border1} xs>
                <Grid container spacing={0}>
                  <Grid className={classes.border1} item xs={3}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Ship To :</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid className={classes.border1} item xs={9}>
                    {/* <Paper
                      className={classes.paper}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>{this.props.state?.shopTo}</div>
                    {/* </Paper> */}
                  </Grid>
                </Grid>
              </Grid>

              <Grid className={classes.border1} item xs={6}>
                <Grid container spacing={0} style={{ height: "100%" }}>
                  <Grid
                    // className={classes.border1}
                    style={{
                      height: "100%",
                      borderRight: "1px solid gray",
                      borderRadius: "0",
                    }}
                    item
                    xs={3}
                  >
                    {/* <Paper
                      className={classes.paper1}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div>Remarks :</div>
                    {/* </Paper> */}
                  </Grid>
                  <Grid
                    // className={classes.border1}
                    style={{ height: "100%" }}
                    item
                    xs={9}
                  >
                    {/* <Paper
                      className={classes.paper1}
                      style={{ height: "100%", textAlign: "left" }}
                    > */}
                    <div style={{ height: "100%" }}>
                      {this.props.state?.remarks}
                    </div>
                    {/* </Paper> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.border1} xs>
                {/* <Paper
                  className={classes.paper1}
                  style={{ height: "100%", textAlign: "center" }}
                > */}
                <div>Authorized Signatory</div>
                <div
                  style={{ borderBottom: "1px solid black", height: 50 }}
                ></div>
                <div style={{ fontWeight: "600" }}>R V Rohit Partner</div>
                {/* </Paper> */}
                {/* <Paper className={classes.paper} style={{ height: '100%', textAlign: 'center'}}>
                           <div>
                               Authorized Signatory
                           </div>
                       </Paper>
                       <Paper className={classes.paper} style={{ height: '100%', textAlign: 'center'}}>
                           <div>
                               Authorized Signatory
                           </div>
                       </Paper> */}
              </Grid>
            </Grid>

            {/* <Button onClick={submit}>submit</Button> */}

            {/* <div style={{ textAlign: 'right', marginTop: '2ch'}}>
            <div>
              <Button onClick={goBack} className={classes.button}>
                Back
              </Button>
             
             </div>
           </div> */}
          </div>
          <div>
            {/* <Pdf targetRef={ref} filename="code-example.pdf" options={options} scale={10}>
           {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
         </Pdf> */}
            {/* <ReactToPrint
                trigger={(toPdf) => (
                  <button onClick={toPdf}>Generate Pdf</button>
                )}
                //   <a href="">Print this out!</a>}
                content={() => this.componentRef}
              /> */}
          </div>
        </div>
        {/* </Modal> */}
      </div>
    );
  }
}

export default withStyles(useStyles)(PurchaseOutputForm);
