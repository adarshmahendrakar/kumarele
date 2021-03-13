import React from "react";
import FormLayout from "../../../components/layout/FormLayout";
import { useForm } from "../../../hooks/useForm";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { ControlPointSharp } from "@material-ui/icons";
import { controls } from "../../../components/Inputs";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MenuItem, TextField } from "@material-ui/core";

function GrnForm({
  value,
  addorEdit,
  itemtypes: data,
  uomList,
  view,
  ...props
}) {
  const addTitle = "Add PO Details";
  const editTitle = "Edit PO Details";
  const subtitle = "  Fill in the fields to Add or Update.";
  const initialValues = {
    
    InvoiceNumber: "",
    // paymentId: 0,
    InvoiceDate: "",
    poNumber: "",
    supplyerName: "",
    RecivedDate: "",
    StoreExecutive: "",
    VehicalNumber: "",
    // cgst: 0,
    // // code: 0,
    // codeWithProject: "",
    // // createdOn: "2021-03-12T10:39:53.983Z",
    // date: "",
    // delivery: "",
    // designation: "",
    // endCustomer: "",
    // enterRefNumberDate: "",
    // freight: "",
    // grandTotalAmount: 0,
    // igst: 0,
    // inWords: "",
    // incomeTerms: "",
    // inspection: "",
    // insurence: "",
    // manufacture: "",
    // materialDescription: [
    //   {
    //     materialCode: "",
    //     poBalanceQty: 0,
    //     poQuentity: 0,
    //     purchesOrderId: 0,
    //     remarks: "",
    //     totalAmount: 0,
    //     unitRate: 0,
    //   },
    // ],
    // name: "",
    // packingAndForwarding: "",
    // pay: {
    //   payment1: "",
    //   payment2: "",
    //   payment3: "",
    //   payment4: "",
    //   paymentId: "",
    // },
    // pbg: "",
    // project: "",
    // remarks: "",
    // sgst: 0,
    // shopTo: "",
    // subTotal: 0,
    // supplyerName: "",
    // technocalDiscount: "",
    // userId: 0,
    // warrentry: "",
  };
  const { values, handleInputChange, resetForm, setValue, setValues } = useForm(
    Object.keys(props?.state).length == 0 ? initialValues : props?.state,
    false,
    {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    addorEdit(values);
    resetForm(initialValues);
  };

  return (
    // <FormLayout
    //   addTitle={addTitle}
    //   editTitle={editTitle}
    //   subtitle={subtitle}
    //   handleSubmit={handleSubmit}
    //   {...props}
    // >
    //   <controls.MyInput
    //     label="Vendor Email"
    //     required
    //     name={"vendorEmail"}
    //     value={values?.vendorEmail}
    //     onChange={handleInputChange}
    //   />
    //   <controls.MyInput
    //     label="vendorGSTIN"
    //     required
    //     name={"vendorGSTIN"}
    //     value={values?.vendorGSTIN}
    //     onChange={handleInputChange}
    //   />
    //   <controls.MyInput
    //     label="Vendor Name"
    //     required
    //     name={"vendorName"}
    //     value={values?.vendorName}
    //     onChange={handleInputChange}
    //   />
    //   <controls.MyInput
    //     label="Vendor Phone"
    //     required
    //     name={"vendorPhone"}
    //     value={values?.vendorPhone}
    //     onChange={handleInputChange}
    //   />
    //   <controls.MyInput
    //     label="Vendor Primary Address"
    //     required
    //     multiline
    //     rows={3}
    //     name={"vendorPrimaryAddress"}
    //     value={values?.vendorPrimaryAddress}
    //     onChange={handleInputChange}
    //   />
    //   <controls.MyInput
    //     label="Vendor Quarternary Address"
    //     required
    //     multiline
    //     rows={3}
    //     name={"vendorQuarternaryAddress"}
    //     value={values?.vendorQuarternaryAddress}
    //     onChange={handleInputChange}
    //   />
    //   <controls.MyInput
    //     label="Vendor Secondary Address"
    //     required
    //     multiline
    //     rows={3}
    //     name={"vendorSecondaryAddress"}
    //     value={values?.vendorSecondaryAddress}
    //     onChange={handleInputChange}
    //   />
    //   <controls.MyInput
    //     label="Vendor Tertiary Address"
    //     required
    //     multiline
    //     rows={3}
    //     name={"vendorTertiaryAddress"}
    //     value={values?.vendorTertiaryAddress}
    //     onChange={handleInputChange}
    //   />
    // </FormLayout>
    <FormLayout
      addTitle={addTitle}
      editTitle={editTitle}
      subtitle={subtitle}
      handleSubmit={handleSubmit}
      {...props}
    >
      <div className="border po-form" style={{ margin: "0 200px" }}>
        <div style={{ width: "80%", margin: "0 20px" }} className="login-form">
        
          <TextField
            // disabled
            style={{ margin: "10px" }}
            margin="dense"
            value={values.InvoiceNumber ? values.InvoiceNumber : ""}
            label="Invoice Number"
            name="InvoiceNumber"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          {props.type === "put" ? (
            <>
              <TextField
                disabled
                style={{ margin: "10px" }}
                margin="dense"
                value={values.InvoiceDate ? values.InvoiceDate : ""}
                
                label="Invoice Date"
                name="InvoiceDate"
                type="date"
                fullWidth
                onChange={handleInputChange}
              />
              {/* <AmmendmentDialog values={{ ...values }} /> */}
            </>
          ) : null}
          <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.date ? values.date : ""}
            helperText="Please select your Invoice Date"
            name="date"
            type="date"
            fullWidth
            onChange={handleInputChange}
          />
          
         
         
             <TextField
            // disabled
            style={{ margin: "10px" }}
            margin="dense"
            label="PO Number"
            value={values.poNumber ? values.poNumber : ""}
            helperText="Please select your PO Date"
            name="poNumber"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
           <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.supplyerName ? values.supplyerName : ""}
            label="supplyer Name"
            name="supplyerName"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
        
          <TextField
                // disabled
                style={{ margin: "10px" }}
                margin="dense"
                value={values.RecivedDate ? values.RecivedDate : ""}
                 helperText="Mention Your Recived date"
                
                name="RecivedDate"
                type="date"
                fullWidth
                onChange={handleInputChange}
              />

          <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.StoreExecutive ? values.StoreExecutive : ""}
            // helperText="Please select your Delivery Date"
            label="Store Executive"
            name="StoreExecutive"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="VehicalNumber"
            select
            fullWidth
            value={values.VehicalNumber ? values.VehicalNumber : ""}
            label="Vehical Number"
            onChange={handleInputChange}
            helperText="Please select your Vehical Number"
          >
            {/* {payment?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          </TextField>
          {/* <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="paymentTerms2"
            select
            fullWidth
            value={values.paymentTerms2 ? values.paymentTerms2 : ""}
            label="Payment Terms 2"
            onChange={handleInputChange}
            helperText="Please select your Payment Type"
          > */}
            {/* {payment?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>
          <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="paymentTerms3"
            select
            fullWidth
            value={values.paymentTerms3 ? values.paymentTerms3 : ""}
            label="Payment Terms 3"
            onChange={handleInputChange}
            helperText="Please select your Payment Type"
          > */}
            {/* {payment?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField> */}
          {/* <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.paymentTerms4 ? values.paymentTerms4 : ""}
            label="Payment Terms"
            name="paymentTerms4"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="insurence"
            select
            fullWidth
            value={values.insurence ? values.insurence : ""}
            label="Insurance"
            onChange={handleInputChange}
            helperText="Please select your Insurance Type"
          > */}
            {/* {insurance?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField> */}
          {/* <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.delivery ? values.delivery : ""}
            label="Ship To"
            name="delivery"
            type="text"
            fullWidth
            onChange={handleInputChange}
          /> */}
          {/* <Autocomplete
          fullWidth
          // value={props.queryRes}
          onChange={(event, newValue) => {
            setmyName(newValue.vendorName);
            console.log(myName);
            props.setItemProps(newValue);
          }}
          inputValue={inputRes}
          onInputChange={(event, newInputValue) => {
            //console.log("ss", props.queryRes);

            setInputRes(newInputValue);
          }}
          placeholder={myName}
          id="combo-box-demo"
          options={options}
          getOptionLabel={(option) => option?.vendorName}
          // style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Supplier Name" />
          )}
        /> */}
          {/* <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.name ? values.name : ""}
            label="Name"
            name="name"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.enqRef ? values.enqRef : ""}
            label="Enq Ref No"
            name="enqRef"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.enqRefDate ? values.enqRefDate : ""}
            name="enqRefDate"
            type="date"
            fullWidth
            helperText="Please select your Ref Date"
            onChange={handleInputChange}
          />
        </div>
        <div
          style={{ width: "30%", margin: "0 20px" }}
          className="form-edge login-form"
        >
          <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="endCustomer"
            select
            fullWidth
            value={values.endCustomer ? values.endCustomer : ""}
            label="End Customer"
            onChange={handleInputChange}
            helperText="Please select your End Customer"
          > */}
            {/* {endCustomer?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField> */}
          {/* <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="incomeTerms"
            select
            fullWidth
            value={values.incomeTerms ? values.incomeTerms : ""}
            label="Inco Terms"
            onChange={handleInputChange}
            helperText="Please select your Inco Terms"
          > */}
            {/* {incoTerms?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>
          <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="warrentry"
            select
            fullWidth
            value={values.warrentry ? values.warrentry : ""}
            label="Warranty"
            onChange={handleInputChange}
            helperText="Please select your Warranty Type"
          > */}
            {/* {warranty?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>
          <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="abg"
            select
            fullWidth
            value={values.abg ? values.abg : ""}
            label="ABG"
            onChange={handleInputChange}
            helperText="Please select your ABG Type"
          > */}
            {/* {abg?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>
          <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="pbg"
            select
            fullWidth
            value={values.pbg ? values.pbg : ""}
            label="PBG"
            onChange={handleInputChange}
            helperText="Please select your PBG Type"
          > */}
            {/* {pbg?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>
          <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="freight"
            select
            fullWidth
            value={values.freight ? values.freight : ""}
            label="Freight"
            onChange={handleInputChange}
            helperText="Please select your Freight"
          > */}
            {/* {freight?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>
          <TextField
            style={{ margin: "10px" }}
            id="standard-select-currency"
            name="packingAndForwarding"
            select
            fullWidth
            value={
              values.packingAndForwarding ? values.packingAndForwarding : ""
            }
            label="Packing & Forwarding"
            onChange={handleInputChange}
            helperText="Please select your PAF Type" */}
          {/* > */}
            {/* {packing?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>
          <TextField
            style={{ margin: "10px" }}
            value={values.technocalDiscount ? values.technocalDiscount : ""}
            label="Technical Document Submission"
            name="technocalDiscount"
            select
            fullWidth
            onChange={handleInputChange}
            helperText="Please select your Technical Document Submission Type"
          > */}
            {/* {technicalDocument?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>

          <TextField
            style={{ margin: "10px" }}
            value={values.inspection ? values.inspection : ""}
            label="Inspection"
            name="inspection"
            select
            fullWidth
            onChange={handleInputChange}
            helperText="Please select your Technical Document Submission Type"
          > */}
            {/* {inspection?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>

          <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.manufacture ? values.manufacture : ""}
            label="Manufacturing Clearance"
            name="manufacture"
            select
            fullWidth
            onChange={handleInputChange}
            helperText="Please select your Manufacture Clearance Type"
          > */}
            {/* {manufacturing?.fieldValues?.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            );
          })} */}
          {/* </TextField>
          <TextField
            disabled
            style={{ margin: "10px" }}
            margin="dense"
            value={"9%"}
            label="CGST"
            name="cgst"
            //type="number"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            style={{ margin: "10px" }}
            margin="dense"
            disabled
            value={"9%"}
            label="SGST"
            name="sgst"
            // type="number"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            style={{ margin: "10px" }}
            margin="dense"
            disabled
            value={"18%"}
            label="IGST"
            name="igst"
            // type="number"
            fullWidth
            onChange={handleInputChange}
          />

          <TextField
            style={{ margin: "10px" }}
            margin="dense"
            value={values.authorizedSignitor ? values.authorizedSignitor : ""}
            label="Authorized Sign"
            name="authorizedSignitor"
            type="text"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            style={{ margin: "10px" }}
            id="outlined-multiline-static"
            label="Remarks"
            name="remarks"
            value={values.remarks ? values.remarks : " "}
            multiline
            fullWidth
            rows={4}
            variant="outlined"
            onChange={handleInputChange}
          /> */}
        </div>
      </div>
    </FormLayout>
  );
}

export default GrnForm;
