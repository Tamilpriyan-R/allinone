import { useState } from "react";
import "./App.css";
import TableComponents from "./components/tabel";

function App() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const newData = [
    {
      firstName: "Tanner",
      lastName: "Linsley",
      age: 33,
      visits: 100,
      progress: 50,
      status: "Married",
    },
    {
      firstName: "Kevin",
      lastName: "Vandy",
      age: 27,
      visits: 200,
      progress: 100,
      status: "Single",
    },
    {
      firstName: "Sara",
      lastName: "Mills",
      age: 29,
      visits: 150,
      progress: 65,
      status: "Single",
    },
    {
      firstName: "John",
      lastName: "Doe",
      age: 45,
      visits: 90,
      progress: 80,
      status: "Married",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 34,
      visits: 120,
      progress: 40,
      status: "Single",
    },
    {
      firstName: "Emily",
      lastName: "Brown",
      age: 25,
      visits: 250,
      progress: 70,
      status: "Single",
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      age: 38,
      visits: 300,
      progress: 90,
      status: "Divorced",
    },
    {
      firstName: "Chris",
      lastName: "Lee",
      age: 31,
      visits: 180,
      progress: 30,
      status: "Married",
    },
    {
      firstName: "Anna",
      lastName: "Davis",
      age: 22,
      visits: 210,
      progress: 55,
      status: "Single",
    },
    {
      firstName: "Robert",
      lastName: "Wilson",
      age: 44,
      visits: 95,
      progress: 60,
      status: "Married",
    },

    {
      firstName: "Ella",
      lastName: "Nelson",
      age: 20,
      visits: 140,
      progress: 55,
      status: "Single",
    },
    {
      firstName: "Henry",
      lastName: "Carter",
      age: 42,
      visits: 205,
      progress: 90,
      status: "Married",
    },
    {
      firstName: "Lily",
      lastName: "Mitchell",
      age: 27,
      visits: 195,
      progress: 75,
      status: "Single",
    },
    {
      firstName: "Kyle",
      lastName: "Perez",
      age: 33,
      visits: 125,
      progress: 50,
      status: "Married",
    },
    {
      firstName: "Zoe",
      lastName: "Roberts",
      age: 22,
      visits: 185,
      progress: 65,
      status: "Single",
    },
    {
      firstName: "Ethan",
      lastName: "Turner",
      age: 34,
      visits: 230,
      progress: 85,
      status: "Divorced",
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      age: 28,
      visits: 110,
      progress: 70,
      status: "Married",
    },
    {
      firstName: "Bob",
      lastName: "Williams",
      age: 35,
      visits: 95,
      progress: 45,
      status: "Single",
    },
    {
      firstName: "Charlie",
      lastName: "Brown",
      age: 42,
      visits: 180,
      progress: 90,
      status: "Divorced",
    },
    {
      firstName: "Diana",
      lastName: "Jones",
      age: 23,
      visits: 160,
      progress: 60,
      status: "Single",
    },
    {
      firstName: "Eve",
      lastName: "Miller",
      age: 30,
      visits: 130,
      progress: 75,
      status: "Married",
    },
    {
      firstName: "Frank",
      lastName: "Davis",
      age: 39,
      visits: 200,
      progress: 80,
      status: "Single",
    },
    {
      firstName: "Grace",
      lastName: "Garcia",
      age: 26,
      visits: 115,
      progress: 55,
      status: "Married",
    },
    {
      firstName: "Harry",
      lastName: "Rodriguez",
      age: 48,
      visits: 70,
      progress: 30,
      status: "Divorced",
    },
    {
      firstName: "Ivy",
      lastName: "Martinez",
      age: 29,
      visits: 140,
      progress: 65,
      status: "Single",
    },
    {
      firstName: "Jack",
      lastName: "Hernandez",
      age: 33,
      visits: 100,
      progress: 50,
      status: "Married",
    },
    {
      firstName: "Karen",
      lastName: "Lopez",
      age: 27,
      visits: 210,
      progress: 95,
      status: "Single",
    },
    {
      firstName: "Liam",
      lastName: "Gonzalez",
      age: 31,
      visits: 170,
      progress: 85,
      status: "Married",
    },
    {
      firstName: "Mia",
      lastName: "Wilson",
      age: 24,
      visits: 125,
      progress: 40,
      status: "Single",
    },
    {
      firstName: "Noah",
      lastName: "Anderson",
      age: 40,
      visits: 230,
      progress: 100,
      status: "Married",
    },
    {
      firstName: "Olivia",
      lastName: "Thomas",
      age: 22,
      visits: 150,
      progress: 70,
      status: "Single",
    },
    {
      firstName: "Peter",
      lastName: "Jackson",
      age: 36,
      visits: 90,
      progress: 60,
      status: "Divorced",
    },
    {
      firstName: "Quinn",
      lastName: "White",
      age: 25,
      visits: 180,
      progress: 80,
      status: "Single",
    },
    {
      firstName: "Rachel",
      lastName: "Harris",
      age: 32,
      visits: 135,
      progress: 55,
      status: "Married",
    },
    {
      firstName: "Sam",
      lastName: "Martin",
      age: 29,
      visits: 165,
      progress: 75,
      status: "Single",
    },
    {
      firstName: "Tina",
      lastName: "Thompson",
      age: 38,
      visits: 195,
      progress: 90,
      status: "Married",
    },
    {
      firstName: "Uma",
      lastName: "Scott",
      age: 21,
      visits: 110,
      progress: 35,
      status: "Single",
    },
    {
      firstName: "Victor",
      lastName: "Clark",
      age: 45,
      visits: 105,
      progress: 65,
      status: "Divorced",
    },
    {
      firstName: "Wendy",
      lastName: "Lewis",
      age: 30,
      visits: 145,
      progress: 70,
      status: "Married",
    },
    {
      firstName: "Xavier",
      lastName: "Walker",
      age: 26,
      visits: 120,
      progress: 50,
      status: "Single",
    },
    {
      firstName: "Yara",
      lastName: "Hall",
      age: 37,
      visits: 220,
      progress: 95,
      status: "Married",
    },
  ];

  const columns = [
    {
      header: "First Name",
      accessorKey: "firstName",
      cell: (props) => <p>{props?.getValue()}</p>,

      meta: {
        sticky: true,
        left: 0,
      },
    },
    {
      header: "Last Name",
      accessorKey: "lastName",
      cell: (props) => <p>{props?.getValue()}</p>,
      // meta: {
      //   sticky: true,
      //   left: 150,
      // },
    },
    {
      header: "Age",
      accessorKey: "age",
      cell: (props) => <p>{props?.getValue()}</p>,
      // meta: {
      //   sticky: true,
      //   left: 250,
      // },
    },
    {
      header: "Visits",
      accessorKey: "visits",
      cell: (props) => <p style={{ color: "red" }}>{props?.getValue()}</p>,
    },
    {
      header: "Last Name",
      accessorKey: "lastName",
      cell: (props) => <p>{props?.getValue()}</p>,
    },
    {
      header: "Age",
      accessorKey: "age",
      cell: (props) => <p>{props?.getValue()}</p>,
    },
    {
      header: "Visits",
      accessorKey: "visits",
      cell: (props) => <p>{props?.getValue()}</p>,
    },
    {
      header: "Single",
      accessorKey: "status",
      cell: (props) => <p>{props?.getValue()}</p>,
    },
  ];

  const getPageData = (data, page, pageSize = pagination.pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  const result = getPageData(newData, pagination.pageIndex + 1);

  const handleChange = (e) => {
    console.log("search functionality");
    // search functionality
  };

  const handleDateChange = (start, end) => {
    console.log("date filter functinality");
    // date filter functionality
  };

  const handleExport = () => {
    console.log("export functionality");
    //export functionality
  };
  const handleUpload = () => {
    console.log("upload functionality");
    //upload functionality
  };

  return (
    <>
      <TableComponents
        rows={result}
        columns={columns}
        pagination={pagination}
        setPagination={setPagination}
        pageCount={4}
        onChange={handleChange}
        recordCount={45}
        addTitle="Add Policy Reader"
        heading="Policy Reader List"
        isLoading={false} // loading enable
        isMore={true} // More options Enable
        isExport={true} // export options enable
        isUpload={true} // upload options enable
        isAdd={true} // add option enable
        isDateFilter={true} // date filter enable
        isSearch={true} // seacrh enable
        dateChange={handleDateChange}
        onExport={handleExport}
        onUpload={handleUpload}
      />
    </>
  );
}

export default App;
