import React, { Component } from "react";

class TableComponent extends Component {
  render() {
    const { title, data, columns, onRowClick, options, actions } = this.props;
    return (
      <MaterialTable
        title="Customers Available"
        icons={tableIcons}
        isLoading={!isLoaded(customers)}
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
        }}
        columns={[
          {
            title: "Name",
            field: "customerName",
            // render: (rowData) =>
            // 	`${rowData.fn} ${rowData.ln}`,
          },
          {
            title: "Contact",
            field: "phone",
          },

          {
            title: " Register On",
            field: "dateTime",
            emptyValue: "Date Not Mentioned",
          },
        ]}
        onRowClick={(evt, selectedRow) => {
          this.props.history.push(`/customers/profile/${selectedRow.id}`);
        }}
        data={customers}
        options={{
          emptyRowsWhenPaging: false,
          pageSize: 100,
          pageSizeOptions: false,
          exportButton: true,
          filtering: true,
          selection: true,
        }}
        actions={[
          {
            tooltip: "Remove All Selected Users",
            icon: "delete",
            //   onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')

            onClick: async (evt, data) => {
              // data.map(async (d) => await this.props.deleteCustom(d.id));

              await this.props.deleteCustom(data.map((d) => d.id));

              this.setState({ showSnackbar: true });
            },
          },
        ]}
      />
    );
  }
}

export default TableComponent;
