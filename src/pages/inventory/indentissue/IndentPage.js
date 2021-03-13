import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useService } from "./IndentService";
import IndentForm from "./IndentForm";
import IndentView from "./IndentView";
import PageContent1 from "../../../components/layout/PageContent1";
import { useConfirmation } from "../../../hooks/useConfirmation";
function IndentPage() {
  const title = "Indent Issues";

  const [mydata, actions] = useService();
  const { ConfirmPopup, openConfirm } = useConfirmation(
    "Are you sure",
    "once deleted not recoverd"
  );
  const Form = IndentForm;

  console.log("useService", useService());

  const [value, setValue] = useState({ open: false, data: {} });
  const [viewValue, setViewValue] = useState({ viewOpen: false, viewData: {} });

  const addOrEdit = (v) => {
    if (Object.keys(value?.data || {}).length == 0) {
      actions.add(v);
    } else {
      actions.update(v);
    }
    setValue((v) => ({ ...v, open: false, data: {} }));
  };
  const handleView = (da) => {
    setViewValue((v) => ({ ...v, viewOpen: true, viewData: da }));
  };
  const handleEdit = (da) => {
    setValue((v) => ({ ...v, open: true, data: da }));
  };
  const handleDelete = (da) => {
    openConfirm(() => actions.deletec(da));
  };
  const data = React.useMemo(() => {
    console.log("mydata", mydata);
    return mydata;
  }, [mydata]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Sl. No",
        accessor: "vendorCode",
      },
      {
        Header: "Invoice Date",
        accessor: "date",
      },
      {
        Header: "Invoice Number ",
        accessor: "",
      },
      {
        Header: "Po.No",
        accessor: "supplyerName",
      },
      {
        Header: "Recived Date",
        accessor: "project",
      },
      {
        Header: "Store Invoice ID",
        accessor: "",
      },
    

      {
        Header: "Actions",
        Cell: ({ row }) => (
          <>
            <VisibilityIcon
              onClick={() => handleView(row?.original)}
              style={{ margin: "5px", cursor: "pointer" }}
            />
            <AddIcon
              onClick={() => handleEdit(row?.original)}
              style={{ margin: "5px", cursor: "pointer" }}
            />
            <EditIcon
              onClick={() => handleEdit(row?.original)}
              style={{ margin: "5px", cursor: "pointer" }}
            />
            <DeleteIcon
              onClick={() => handleDelete(row?.original)}
              style={{ margin: "5px", cursor: "pointer" }}
            />
          </>
        ),
      },
    ],
    []
  );
  if (Boolean(value?.open)) {
    return (
      <Form
        cancel={() => setValue({ open: false, data: {} })}
        state={value?.data}
        addorEdit={addOrEdit}
      />
    );
  } else if (Boolean(viewValue?.viewOpen)) {
    return (
      <IndentView
        cancel={() => setValue({ viewOpen: false, viewData: {} })}
        state={viewValue?.viewData}
        addorEdit={addOrEdit}
      />
    );
  } else {
    return (
      <>
        <PageContent1
          title={title}
          onClick={() => setValue({ open: true, data: {} })}
          data={data}
          columns={columns}
        />
        <ConfirmPopup />
      </>
    );
  }
}

export default IndentPage;
