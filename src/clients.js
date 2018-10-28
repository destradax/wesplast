import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import clientsService from './services/clients';

export default class Clients extends React.Component {
  render() {
    const clients = clientsService.getClients();

    return (
      <div className="clients">
        <ReactTable
          data={clients}
          columns={[
            {
              Header: 'NAME',
              accessor: 'name'
            },
            {
              Header: 'ADDRESS',
              accessor: 'address'
            },
            {
              Header: 'Email',
              accessor: 'email'
            }
          ]}
        />
      </div>
    );
  }
}
