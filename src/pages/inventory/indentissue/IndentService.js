import React, { useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import {
  Getdata,
  Postdata,
  Deletedata,
  PostFormdata,
} from "../../../api/Server";

export const useService = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Getdata("http://localhost:8183/purchase-order?limit=100").then((d) => {
      console.log("po dd", d);
      setData(d);
    });
  }, []);
  const add = (v) => {
    Postdata("http://localhost:8183/vendor", "POST", v)
      .then((d) => {
        if (d) {
          toast.success("Submitted Successfully");
          setData((data) => [...data, d]);
        } else {
          toast.error("Somting went wrong");
        }
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const update = (v) => {
    // alert('update')
    Postdata("http://localhost:8183/vendor", "PUT", {
      vendor: { ...v, createdOn: null, modifiedOn: null },
    }).then((d) => {
      if (d) {
        toast.success("Updated Successfully");
        setData((data) =>
          data.map((item1) => (item1.vendorCode == v.vendorCode ? v : item1))
        );
      } else {
        toast.error("Somting went wrong");
      }
    });
    toast.success("Updated Successfully");
    setData((data) =>
      data.map((item1) => (item1.vendorCode == v.vendorCode ? v : item1))
    );
  };

  const deletec = (v) => {
    console.log("v", v);
    Deletedata("http://localhost:8183/purchase-order/", "DELETE", v.id).then(
      (d) => {
        toast.error("deleted Successfully");

        setData((data) =>
          data.filter((item1) => item1.vendorCode != v.vendorCode)
        );
      }
    );
  };
  const actions = { add, update, deletec };
  return [data || [], actions];
};
