import React from "react";
import useGetData from "../Util/hooks/getData";
import Table from "../Util/Table";

const PublicHomePage = () => {
  
  const { data } = useGetData("/transaction/for-publicReport");
  const tableHead = [
    { name: "Student Name", fieldName: "studentName" },
    { name: "Receive Amount", fieldName: "totalDonate" },
    { name: "Recovery Amount", fieldName: "totalRecovery" },
    { name: "Due", fieldName: "title" },
    { name: "Details", fieldName: "title" },
  ];
  return (
    <div>
      <Table data={data} tableHead={tableHead} />
    </div>
  );
};

export default PublicHomePage;
