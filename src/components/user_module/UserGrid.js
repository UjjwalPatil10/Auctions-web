import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import FormEditModal from "./FormEditModal";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { GlobalFilter } from "../../shared/GlobalFilter";
import { COLUMNS } from "./columns";
import "./table.css";
import { TableCheckbox } from "../../shared/TableCheckbox";
import { useNavigate } from "react-router-dom";
import { BsFillPencilFill, BsFillTrashFill, BsFillEyeFill } from "react-icons/bs";
import DataModal from "./DataModal";

export const UserGrid = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const visibleColumns = React.useMemo(
    () => columns.filter(column => column.Header !== 'ID'), 
    [columns]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    selectedFlatRows,
    setGlobalFilter,
  } = useTable(
    {
      columns: visibleColumns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <TableCheckbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <TableCheckbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

 const editUser = (row) => {
      console.log(row)
      setModalIsOpen(true)
      setUserDetails(row)
 }

 const deleteUser = (id) => {
  console.log(id);

  axios
    .delete(`http://localhost:4000/users/${id}`)
    .then((res) => {
      setData((prevData) => prevData.filter((row) => row.id !== id));
      const updatedData = data.filter((user) => user.id !== id);
      setData(updatedData);
      toast.success("User deleted successfully.", {
        position: toast.POSITION.TOP_CENTER,
      });
    })
    .catch((err) => {
      console.log(err);
      toast.error("Error deleting user.");
    });
};

  const { globalFilter } = state;

  const { pageIndex, pageSize } = state;

  useEffect(() => {
    console.log("Global Filter Value:", globalFilter);
  }, [globalFilter]);

  const handleView = (row) => {
    setModalData(row.values);
    setIsModalVisible(true);
  };

  

  return (
    <>
      <div className="d-flex justify-content-between mt-3">
    
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} style={{ marginLeft: '20px'}} /> 
    <button
        className="btn form-control mb-1 col-md-1 btn-sm btn-primary"
        style={{ 
          width: '120px',
          height: '40px',
          marginRight: '10px'
      }}
        onClick={() => navigate("/masteruser")}
    >
        Add New User
    </button>
</div>
<div className="container-fluid table-container" style={{ overflowX: "auto" }}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>
                    {column.canFilter ? (
                      <React.Fragment>
                        <div>{JSON.stringify(column.Filter)}</div>
                        {column.Filter &&
                          React.createElement(column.Filter, { column })}
                      </React.Fragment>
                    ) : null}
                  </div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
              <th>Action</th>
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {data.length > 0 ? (
            page.map((row) => {
              prepareRow(row);
              console.log("Row Data:", row.original);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}

                  <td>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-primary btn-sm me-1 border-0 bg-transparent"
                        style={{ width: "2rem", height: "1.5rem" }}
                        onClick={() => editUser(row.original.values)}
                        >
                        <i class="bi-trash"></i>
                        <BsFillPencilFill style={{ color: "blue" }} />
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm border-0 bg-transparent"
                        style={{ width: "2rem", height: "1.5rem" }}
                        onClick={() => deleteUser(row.original.id)}
                      >
                        <i class="bi-trash"></i>
                        <BsFillTrashFill style={{ color: "red" }} />
                        
                      </button>
                      </div>
                      <div>
                      <button
                      className="btn btn-outline-danger btn-sm border-0 bg-transparent gap-1"
                      style={{ width: "0.5rem", height: "1.5rem" }}
                      onClick={() => handleView(row)}
                      >
                      <BsFillEyeFill style={{ color: "black" }} />
                      </button>
                      </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={columns.length}>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      <br />
      <div className="d-flex justify-content-center gap-2 mb-5">
      <select
          className="col-md-1 btn-sm mb-2 ml-5"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <span className="mt-2">
          Page{" "}
          <strong>
            {" "}
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        <span className="mt-1">
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <button
          className="btn mb-2 col-md-1 btn-sm"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          style={{ background: 'none', border: 'none', outline: 'none', width: 'auto', padding: '0 6px' }}
        >
          {"<<"}
        </button>
        <button
          className="btn mb-2 col-md-1 btn-sm btn-outline-primary"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className="btn mb-2 col-md-1 btn-sm btn-outline-primary"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          className="btn mb-2 col-md-1 btn-sm"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          style={{ background: 'none', border: 'none', outline: 'none', width: 'auto', padding: '0 6px' }}
        >
          {">>"}
        </button>
      </div>

      <pre>
        <code>
          {/* {JSON.stringify(
            {
              SelectedRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )} */}
        </code>
      </pre>

     <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true} >
      {console.log("click "+ userDetails)}
      <FormEditModal userDetails={userDetails} />
      <DataModal data={modalData}  />
     </Modal>
     
     <div>
        <ToastContainer />
      </div>

    </>
  );
};
