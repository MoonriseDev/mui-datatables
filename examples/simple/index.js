import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "../../src/";
import {Typography} from "@material-ui/core";
import Email from '@material-ui/icons/Email';
import Sms from '@material-ui/icons/Sms';

class Example extends React.Component {

  render() {

    const columns = [{
      name:"Name",
      options: {
      filter: true,
      sort: true,
      searchable: true,
      customBodyRender: function(cellData, tableMeta, updateValue) {
        return <Typography>{'sms' === 'sms' && cellData !== 'Gabby George' ? 
        <Sms className="vertical-align-middle purple-color" /> : 
        <Email className="vertical-align-middle purple-color" />}{cellData}</Typography>;
      }
    }}, {
      name: "Title",
      options: {
      filter: true,
      sort: true,
      searchable: true,
      customBodyRender: function(cellData, tableMeta, updateValue) {
        return <Typography>{cellData}</Typography>;
      }
    }}, {
      name: "Location", 
      options: {
      filter: true,
      sort: true,
      searchable: true,
      customBodyRender: function(cellData, tableMeta, updateValue) {
        return <Typography>{cellData}</Typography>;
      }
    }}];

    const data = [
      ["Gabby George", "Business Analyst", 'Albuquerque'],
      ["Aiden Lloyd", "Business Consultant", "Dallas"],
      ["Jaden Collins", "Attorney", "Santa Ana"],
      ["Franky Rees", "Business Analyst", "St. Petersburg"],
      ["Aaren Rose", null, "Toledo"]
    ];


    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
    };

    return (
      <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options} />
    );

  }
}

export default Example;
