import React from 'react';
import Admin_NavBar from '../../Organisms/NavBar/Admin/AdminNavBar';

import Admin_SideBar from '../../Organisms/SideBar/Admin/Admin_SideBar';

const AdminTemplate = ({ children, pageName }) => (
   <div className='bg-black w-screen h-[120vh] flex flex-col'>
      <div className='flex'>
         <Admin_NavBar text={pageName} />
      </div>

      <div className='flex h-[110vh] w-screen'>
         <Admin_SideBar />

         <div className='Page1_right w-[74%] max-[1047px]:w-full max-[1047px]:mt-[12vh] h-[110vh] flex  relative justify-between'>
            <div className='w-full h-full flex  flex-col items-center mt-[4vh]'>
               {children}
            </div>
         </div>
      </div>
   </div>
);

export default AdminTemplate;
