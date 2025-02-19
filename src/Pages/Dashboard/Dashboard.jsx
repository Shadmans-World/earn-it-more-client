import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaCoins, FaHistory, FaHome, FaTasks, FaUsers } from "react-icons/fa";
import useDbUser from "../../Hooks/useDbUser";
import { AiOutlineFileDone } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdTask } from "react-icons/md";
import Footer from "../../Components/Footer/Footer";

const Dashboard = () => {
  const [dbUsers, currentUser] = useDbUser();

  const workers = currentUser.role === "worker";
  const admin = currentUser.role === "admin";
  const buyers = currentUser.role === "buyer";
  const location = useLocation();

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 md:min-h-[calc(100vh-86.6px)] bg-orange-400">
        <ul className="menu space-y-4 p-4">
          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="text-2xl" />
                  <span className="text-[1rem]">Admin Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/admin/manage-user">
                  <FaUsers className="text-2xl" />
                  <span className="text-[1rem]">Manage User</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/admin/manage-task">
                  <FaTasks className="text-2xl" />
                  <span className="text-[1rem]">Manage Task</span>
                </NavLink>
              </li>
            </>
          )}

          {workers && (
            <>
              <li>
                <NavLink to="/dashboard/workerHome">
                  <FaHome className="text-2xl" />
                  <span className="text-[1rem]">Worker Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/worker-task">
                  <FaTasks className="text-2xl" />
                  <span className="text-[1rem]">Task List</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/worker-submission">
                  <AiOutlineFileDone className="text-2xl" />
                  <span className="text-[1rem]">My Submission</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/worker-withdrawal">
                  <BiMoneyWithdraw className="text-2xl" />
                  <span className="text-[1rem]">My Withdrawals</span>
                </NavLink>
              </li>
            </>
          )}

          {buyers && (
            <>
              <li>
                <NavLink to="/dashboard/buyerHome">
                  <FaHome className="text-2xl" />
                  <span className="text-[1rem]">Buyer Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/buyer-addTask">
                  <FaTasks className="text-2xl" />
                  <span className="text-[1rem]">Add New Task</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/buyer-task">
                  <MdTask className="text-2xl" />
                  <span className="text-[1rem]">My Task's </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/purchaseCoin">
                  <FaCoins className="text-2xl" />
                  <span className="text-[1rem]">Purchase Coin</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/purchaseHistory">
                  <FaHistory className="text-2xl" />
                  <span className="text-[1rem]">Purchase History</span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider pt-5 pb-2"></div>
          <li>
            <NavLink to="/">
              <FaHome className="text-2xl" />
              <span className="text-[1rem]">Home</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Dashboard Content */}
      <div className="w-full flex flex-col min-h-[calc(100vh-86.6px)]">
        {location.pathname === "/dashboard" ? (
          <div className="flex-grow flex items-center justify-center flex-col p-5">
            <h2 className="text-2xl mb-6 text-center">
              <span className="text-yellow-500">Welcome</span> {currentUser.name}!
            </h2>
            {/* User Profile Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-96 flex flex-col items-center border border-gray-200">
              <img
                src={currentUser.profilePhoto}
                alt={currentUser.name}
                className="w-32 h-32 rounded-full mb-4 shadow-md border-4 border-orange-500"
              />
              <p className="text-xl font-semibold text-gray-700">{currentUser.name}</p>
              <p className="text-sm text-gray-500 mb-2">{currentUser.email}</p>
              <div className="space-y-2 mb-4">
                <p className="text-md">Phone: {currentUser.phone || "Not Available"}</p>
                <p className="text-md">Address: {currentUser.address || "Not Available"}</p>
                {currentUser.coins && (
                  <p className="text-md">Coins: {currentUser.coins}</p>
                )}
              </div>
             
            </div>
          </div>
        ) : (
          <div className="flex-grow">
            <Outlet />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
