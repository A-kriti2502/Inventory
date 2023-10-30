import { AiFillPieChart, AiOutlineLineChart } from 'react-icons/ai';
import { IoIosSettings } from 'react-icons/io';
import {BiSolidNotification} from 'react-icons/bi';
import {CgArrowsExchangeAlt} from 'react-icons/cg';
import {PiDeviceTabletSpeakerDuotone} from 'react-icons/pi';
import {TbDeviceTabletX} from 'react-icons/tb';
import { BsFillPeopleFill, BsFillClipboardDataFill } from 'react-icons/bs';

export const sidebarMenuItems = [
    {
        path:"/admin/analytics",
        name:"Analytics",
        icon: <AiFillPieChart size={23}/>
    },
    {
        path:"/admin/inventory",
        name:"Inventory",
        icon: <BsFillClipboardDataFill size={23}/>
    },
    {
        path:"/admin/managerDetails",
        name:"ManagerDetails",
        icon: <BsFillPeopleFill size={23}/>
    },
    {
        path:"/admin/maintainence",
        name:"Maintainence",
        icon: <IoIosSettings size={23}/>
    },
    {
        path:"/admin/Sales",
        name:"Sales",
        icon: <BsFillPeopleFill size={23}/>
    },
    {
        path:"/admin/notification",
        name:"Notification",
        icon: <BiSolidNotification size={23}/>,
        more: [
            {
                subpath: "/admin/notification/exchange",
                subname: "Exchange",
                subicon: <CgArrowsExchangeAlt size={20}/> 
            },
            {
                subpath: "/admin/notification/restock",
                subname: "Restock",
                subicon: <PiDeviceTabletSpeakerDuotone size={20}/> 
            },
            {
                subpath: "/admin/notification/defect",
                subname: "Defect",
                subicon: <TbDeviceTabletX size={20}/>
            },

        ]
    }
]