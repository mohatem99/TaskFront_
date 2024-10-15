import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import notificationIcon from '../assets/NotificationIcon.svg';
import { useState ,useEffect } from 'react';
import axios from 'axios';


export default function Notifications() {
const [readmark, setReadmark] = useState('bg-customlight');

const [NotifiData, setNotifiData] = useState([]); 
const [loading, setLoading] = useState(true);

const fetchNotifications = async () => {
  try {
        const response = await axios.get('url'); 
        fetchNotifications(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch notifications');
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchNotifications();
    }, []);

    if (loading) {
      return <div>Loading notifications...</div>;
    }


  return (
    <div className="flex h-auto w-full justify-center  p-3">
      <div className="flex gap-8">
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-black ">
          <img src={notificationIcon} alt="Notification Icon" className="w-6 h-6" />

          </PopoverButton>
          
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 h-1/2 mt-2 rounded-lg border bg-customlight text-sm/6 transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-40"
          >
            <div className="p-3 mb-2 bg-customlight">
              <a className={`block rounded-lg py-2 px-3 transition hover:bg-whiteblue mb-2 ${readmark}`} href="#">
                <p className="font-semibold text-darkest ">Remider</p>
                <p className="text-black/50">Task Title is due soon</p>
              </a>
              <a className={`block rounded-lg py-2 px-3 transition hover:bg-whiteblue mb-2 ${readmark}`} href="#">
                <p className="font-semibold text-darkest">Automations</p>
                <p className="text-black/50">Create your own targeted content</p>
              </a>
              <a className={`block rounded-lg py-2 px-3 transition hover:bg-whiteblue  ${readmark}`} href="#">
                <p className="font-semibold text-darkest">Reports</p>
                <p className="text-black/50">Keep track of your growth</p>
              </a>
              <a className={`block rounded-lg py-2 px-3 transition hover:bg-whiteblue  ${readmark}`} href="#">
                <p className="font-semibold text-darkest">Reports</p>
                <p className="text-black/50">Keep track of your growth</p>
              </a>
             

              {/* notifiData.map((notifi, i)=>{
              return(
              ` <a className={`block rounded-lg py-2 px-3 transition hover:bg-whiteblue  ${readmark}`} href="notifi.id">
                <p className="font-semibold text-black">notifi.data</p>
                </a>

                //NOTE , USE LINK INSTEAD OF a
              
              )}) */}
            </div>
            <div className="p-3 text-center font-bold text-black  border-5 hover:bg-darkest hover:text-white sticky bottom-0 bg-customlight">
              <button  onClick={()=>{  setReadmark('bg-white');
}}>
                Mark all as read
              </button>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
