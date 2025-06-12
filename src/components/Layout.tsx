import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
              Skip Hire
            </h1>
          </div>

          {/* Desktop Tabs + Login */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-1 border-b border-gray-200">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `relative px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/skip-selection"
                className={({ isActive }) =>
                  `relative px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`
                }
              >
                Skip Management
              </NavLink>
            </nav>

            <button
              onClick={() => navigate("/login")}
              className="ml-4 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setSidebarOpen(true)}>
              <Bars3Icon className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-blue-700">Skip Hire</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <XMarkIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/skip-selection"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-base font-medium ${
                isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            Skip Management
          </NavLink>
          <button
            onClick={() => {
              setSidebarOpen(false);
              navigate("/login");
            }}
            className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 mt-4"
          >
            Login
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
