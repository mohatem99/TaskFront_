import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import NotificationIcon from '../../assets/NotificationIcon.svg'

import { HiBellAlert } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  markNotificationAsRead,
  addNewNotification,
  fetchNotifications,
} from "../../store/reducers/notifySlice";
import { io } from "socket.io-client";

const socket = io("https://task-management-m6c9.onrender.com");

const NotificationPanel = () => {
  const dispatch = useDispatch();

  const { items, unseenCount } = useSelector((state) => state.notify);

  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);



  const handleMarkAsRead = (notificationId) => {
    dispatch(markNotificationAsRead(notificationId));
  };


  //  const { data, refetch } = useGetNotificationsQuery();
  //  const [markAsRead] = useMarkNotiAsReadMutation();

  const callsToAction = [
    { name: "Cancel", href: "#", icon: "" },
    {
      name: "Mark All Read",
      href: "#",
      icon: "",
      onClick: () => readHandler("all", ""),
    },
  ];

  useEffect(() => {
    dispatch(fetchNotifications());
    console.log(socket);

    socket.emit("join", user?._id);
    socket.on("taskAssigned", (data) => {
      console.log(data);
      dispatch(addNewNotification(data.task));
    });
  }, [dispatch, user._id]);
  return (
    <>
      <Popover className="relative">
        <PopoverButton className="inline-flex items-center outline-none">
          <div className="w-8 h-8 flex items-center justify-center text-gray-800 relative">
            <img src={NotificationIcon} className="w-6 h-6 mt-2 ml-2" />
            {items?.length > 0 && (
              <span className="absolute text-center top-0 right-1 text-sm text-white font-semibold w-4 h-4 rounded-full bg-red-600">
                {unseenCount}
              </span>
            )}
          </div>
        </PopoverButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel className="absolute -right-16 md:-right-2 z-10 mt-5 flex w-screen max-w-max sm:mr-8 md:mr-0 px-3">
            {({ close }) =>
              items?.length > 0 && (
                <div className="w-64 max-w-xs sm:w-64 lg:w-screen lg:max-w-max  flex-auto overflow-hidden  rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4 mr-5 sm:mr-0">
                    {items?.slice(0, 5).map((item, index) => (
                      <div
                        key={item._id + index}
                        className={`group relative mb-1 flex gap-x-4 rounded-lg p-4 hover:bg-gray-50 ${
                          item.isRead ? "bg-white" : "bg-customBlue300"
                        }`}
                        onClick={() => handleMarkAsRead(item._id)}
                      >
                        <div className="mt-1 h-8 w-8 flex items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                          <HiBellAlert className="h-5 w-5 text-gray-600 group-hover:text-customBlue500" />
                        </div>

                        <div className="cursor-pointer ">
                          <div className="flex items-center gap-3 font-semibold text-gray-900 capitalize">
                            <p> {item.notiType}</p>
                            <span className="text-xs text-customBlue600 font-medium lowercase">
                              {moment(item.createdAt).fromNow()}
                            </span>
                          </div>
                          <p className="lg:line-clamp-1 mt-1 text-darkest">
                            {item.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 divide-x bg-gray-50">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-blue-600 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
          </PopoverPanel>
        </Transition>
      </Popover>
    </>
  );
};

export default NotificationPanel;
// ${item.isRead ? "text-customBlue500" : "text-white"}