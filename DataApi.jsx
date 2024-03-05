import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const DataApi = () => {
  const [info, setInfo] = useState([]);
  const [selectdata, setSelectdata] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          console.log(res.data);
          setInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 5000);
  }, []);

  const columns = [
    {
      name: 'USERID',
      selector: (row) => row.userId,
      sortable: true,
      width: '10%',
    },
    {
      name: 'POSTID',
      selector: (row) => row.id,
      sortable: true,
      width: '10%',
    },
    {
      name: 'TITLE',
      selector: (row) => row.title,
      sortable: false,
      wrap: true,
    },
    {
      name: 'BODY',
      selector: (row) => row.body,
      sortable: false,
      wrap: true,
    },
  ];

  const handlechange = (e) => {
    console.log(e.selectedRows);
    setSelectdata(e.selectedRows);
  }

  return (
    <div>
      <DataTable
        title="POST INFORMATION"
        columns={columns}
        data={info}
        pagination
        highlightOnHover
        dense
        striped
        responsive
        selectableRows
        onSelectedRowsChange={handlechange}
      />

      <br />
      <h3>Selected rows are :</h3>
      <table border={2}>
        <tr>
          <th>post id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        {
          selectdata.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.body}</td>
              </tr>
            )
          })
        }
      </table>
    </div>

  );
};

export default DataApi;
