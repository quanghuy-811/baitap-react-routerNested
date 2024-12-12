import { Table } from "flowbite-react";
import { NavLink } from "react-router-dom";
const ListProduct = () => {
  return (
    <div className="px-3 py-6">
      <div className="mt-14">
        <NavLink
          to="/add-product"
          className="text-white px-4 py-2 rounded-lg inline-block bg-gray-500 mb-4 hover:bg-black"
        >
          New Product
        </NavLink>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <NavLink
                    to="/edit-product"
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    Edit
                  </NavLink>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <NavLink
                    to="/edit-product"
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    Edit
                  </NavLink>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Magic Mouse 2
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <NavLink
                    to="/edit-product"
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    Edit
                  </NavLink>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
