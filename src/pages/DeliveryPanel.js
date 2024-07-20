import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaTruck } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/role";

const DeliveryPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== ROLE.DELIVERY) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-white min-h-full w-full max-w-60 customShadow">
        <div className="h-32 flex justify-center items-center flex-col">
          <div className="text-5xl cursor-pointer relative flex justify-center">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-20 h-20 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaTruck />
            )}
          </div>
          <p className="capitalize text-lg font-semibold">{user?.name}</p>
          <p className="text-sm">{user?.role}</p>
        </div>

        {/*** navigation ***/}
        <div>
          <nav className="grid p-4">
            <Link
              to={"orders-to-deliver"}
              className="px-2 py-1 hover:bg-slate-100"
            >
              Orders to Deliver
            </Link>
            <Link
              to={"pending-orders"}
              className="px-2 py-1 hover:bg-slate-100"
            >
              Pending Orders
            </Link>
            <Link
              to={"completed-orders"}
              className="px-2 py-1 hover:bg-slate-100"
            >
              Completed Orders
            </Link>
          </nav>
        </div>
      </aside>

      <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default DeliveryPanel;