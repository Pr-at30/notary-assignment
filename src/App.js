import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  const handleClick = () => {

    axios.post('https://demo2211087.mockable.io/mock', {
      body: {}
    })
      .then(function (response) {
        setData(response.data.companies);
      })
      .catch(function (error) {
        console.log(error);
      }
      );

  }

  return (
    <>
      <div className='container main-container'>
        <h1>The Notary App</h1>
        {
          !data ? <button className='btn btn-primary butt' onClick={handleClick}>Show data</button>
            :
            <table className="table table-dark table-hover table--edit">
              <thead className='head-edit'>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.name}>
                    <td className="col ">{item.name}</td>
                    <td className="col ">{item.email}</td>
                    <td className="col ">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        }
      </div>
    </>
  );
}


export default App;
