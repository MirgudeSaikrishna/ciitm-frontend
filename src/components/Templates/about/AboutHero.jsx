import { useEffect, useState, memo } from 'react';
import { useSelector } from 'react-redux';
import useAbout from '../../../hooks/useAbout.js';

const History = () => {
   const [history, setHistory] = useState({});
   const [vision, setVision] = useState({});

   const aboutPage = useSelector(state => state.about.aboutPage);

   useAbout();

   useEffect(() => {
      if (aboutPage) {
         setHistory(aboutPage.History || {});
         setVision(aboutPage.Vision_and_Mission || {});
      }
   }, [aboutPage]);

   const paragraphKeys = ['First', 'Second', 'Third', 'Four'];

   return (
      <section className='w-full px-10 max-[599px]:px-6 py-20 max-[599px]:py-4 flex items-center gap-3 justify-center max-[599px]:gap-10 font-[Montserrat] max-[599px]:flex-col'>
         <div className='left w-1/2 max-[599px]:w-full h-full flex items-start justify-between gap-3 flex-col'>
            <h1 className='text-[1.7vw] font-semibold text-[#333] max-[599px]:text-[4.5vw]'>
               History
            </h1>
            {paragraphKeys.map((key, index) => (
               <p
                  key={`history-${key}`}
                  className={`history_Para_${index + 1} text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]`}
               >
                  {history[`paragraph_${key}`] ||
                     `Not Found Paragraph ${index + 1}`}
               </p>
            ))}
         </div>

         <div className='right w-1/2 max-[599px]:w-full h-full flex items-start justify-between gap-3 flex-col'>
            <h1 className='text-[1.7vw] font-semibold text-[#333] max-[599px]:text-[4.5vw]'>
               {vision?.title || 'Vision Title Not Found'}
            </h1>
            {paragraphKeys.map((key, index) => (
               <p
                  key={`vision-${key}`}
                  className={`vision_Para_${index + 1} text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]`}
               >
                  {vision[`paragraph_${key}`] ||
                     `Vision Paragraph ${index + 1} Not Found`}
               </p>
            ))}
         </div>
      </section>
   );
};

export default memo(History);
