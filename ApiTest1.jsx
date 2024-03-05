import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const DataApi = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        // Filter tasks where completed is true
        const completedTasks = res.data.filter(task => task.completed === true);
        setTasks(completedTasks);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
      width: '10%',
    },
    {
      name: 'Title',
      selector: 'title',
      sortable: false,
      wrap: true,
    },
    {
      name: 'Completed',
      selector: 'completed',
      sortable: true,
      width: '10%',
    },
  ];

  const handleSelectedRowsChange = (e) => {
    setSelectedTasks(e.selectedRows);
  };

  return (
    <div>
      <DataTable
        title="Completed Tasks"
        columns={columns}
        data={tasks}
        pagination
        highlightOnHover
        dense
        striped
        responsive
        selectableRows
        onSelectedRowsChange={handleSelectedRowsChange}
      />

      <br />
      <h3>Selected rows are :</h3>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            selectedTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.completed ? 'Yes' : 'No'}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default DataApi;
