import {  AiOutlineLineChart } from 'react-icons/ai';
import { IoIosSettings } from 'react-icons/io';
import {MdOutlineSegment} from 'react-icons/md';
import {CgArrowsExchangeAlt} from 'react-icons/cg';
import {PiDeviceTabletSpeakerDuotone} from 'react-icons/pi';
import {TbDeviceTabletX} from 'react-icons/tb';
import {  BsFillClipboardDataFill } from 'react-icons/bs';

export const sidebarManager = [
    
    {
        path:"/manager/inventory",
        name:"Inventory",
        icon: <BsFillClipboardDataFill size={23}/>
    },
    {
        path:"/manager/maintenance",
        name:"Maintainence",
        icon: <IoIosSettings size={23}/>
    },
    {
        path:"/manager/Sales",
        name:"Sales",
        icon: <AiOutlineLineChart size={23}/>
    },
    {
        path:"/manager/services",
        name:"Services",
        icon: <MdOutlineSegment size={23}/>,
        more: [
            {
                subpath: "/manager/notification/exchange",
                subname: "Exchange",
                subicon: <CgArrowsExchangeAlt size={20}/> 
            },
            {
                subpath: "/manager/notification/restock",
                subname: "Restock",
                subicon: <PiDeviceTabletSpeakerDuotone size={20}/> 
            },
            {
                subpath: "/manager/notification/defect",
                subname: "Defect",
                subicon: <TbDeviceTabletX size={20}/>
            },

        ]
    },
]