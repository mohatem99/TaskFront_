import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Loading from './Loading';
import notificationIcon from '../assets/NotificationIcon.svg';
import { useState ,useEffect } from 'react';

import { fetchNotification } from '../redux/reducers/notificationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Notifications() {
  const [readmark, setReadmark] = useState('bg-customlight');

  const {notifications, loading, error} = useSelector((state)=>state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotification()); 
}, [dispatch]);
    
  

        return loading ? (
        <Loading />
    ) : (
      <div className="flex h-auto w-full justify-center  p-3">
        <div className="flex gap-8">
          <Popover>
            <PopoverButton className="block text-sm/6 font-semibold text-black ">
            <img src={notificationIcon} alt="Notification Icon" className="w-6 h-6" />
  
            </PopoverButton>
            
            <PopoverPanel
              transition
              anchor="bottom"
              className={`divide-y divide-white/5 mt-2 rounded-lg border bg-customlight text-sm/6 transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-40 ${notifications.length === 0 ? 'h-1/5' : 'h-1/2'} `} >

              <div className="p-3 mb-2 bg-customlight">
                {notifications.length > 0 ? (
                  <>
                    {notifications.map((notifi, index) => {
                      return (
                        <Link
                          key={index} // Add a unique key for each mapped element
                          to="/tasks"
                          className={`block rounded-lg py-2 px-3 transition hover:bg-whiteblue mb-2 ${readmark}`}
                          onClick={() => {
                            setReadmark('bg-white');
                          }}
                        >
                          <p className="font-semibold text-darkest">{notifi}</p>
                          <p className="text-black/50">{notifi}</p>
                        </Link>
                      );
                    })}
                    {/* Mark As Read Button */}
                    <div className="p-3 text-center font-bold text-black border-5 hover:bg-darkest hover:text-white sticky bottom-0 bg-customBlue800">
                      <button onClick={() => { setReadmark('bg-white'); }}>
                        Mark all as read
                      </button>
                  </div>
                </>
              ) : (
                <p className=' text-darkest font-semibold text-center p-3'>There are no notifications yet</p>
              )}
          </div>

              
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    );
  }
