import { Sidebar } from "flowbite-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProductManagement = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/6 max-h-full ">
        <Sidebar aria-label="Sidebar with logo branding example ">
          <Sidebar.Logo className="text-[#4505c7]">Dashboard</Sidebar.Logo>

          <Sidebar.Items>
            <NavLink className="font-medium" to="/">
              <Sidebar.ItemGroup>
                <Sidebar.Item className="hover:bg-gray-400 hover:text-white">
                  Product
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </NavLink>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="w-5/6 h-full bg-gray-300">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductManagement;
