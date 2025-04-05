import React from 'react';
import InputField from './InputField';
import Dropdown from './DropDown';

const UniversityInfo = ({ handleInputChange }) => {
   return (
      <div className='sm:grid flex flex-col w-full 2xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-4 gap-y-10'>
         <Dropdown
            placeholder='Select Your University'
            name='university'
            required={true}
            options={[
               'Aisect University',
               'Makhanlal Chaturvedi  University Bhopal ',
            ]}
            onChange={handleInputChange}
         />

         <Dropdown
            placeholder='Select Course'
            name='courseName'
            required={true}
            options={['MCA', 'BCA']}
            onChange={handleInputChange}
         />

         {/* mode */}

         <Dropdown
            placeholder='Select Mode'
            name='mode'
            required={true}
            options={['Online', 'Offline']}
            onChange={handleInputChange}
         />
      </div>
   );
};

export default UniversityInfo;
