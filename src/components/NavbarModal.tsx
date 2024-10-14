import  React , {useContext} from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { MyContext } from './Context.jsx';


const style = {
  position: 'absolute',
  top: '0vh',
  left: '30vw',
  width: '70vw',   // Full width of the viewport
  height: '100vh',  // Full height of the viewport
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal() {
  const {isModalOpen , setIsModalOpen , handleModalOpen} = useContext(MyContext)
  const [open, setOpen] = React.useState(false);
  const {homeView , aboutView , whyCAView , responsibilityView, incentiveView , FAQView , contactView } = useContext(MyContext);
  const scrollToSection = (ref:any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
      className=" "
        open={isModalOpen}
        onClose={handleModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=' text-lightOrange shadow-xl shadow-lightOrange bg-gradient-to-b from-zinc-700 via-zinc-900 to-black border-l-2 border-darkOrange bg-opacity-95 animate-slide-in-right'>
         
          <div id='main-components' className=' cursor-pointer mt-12 flex flex-col h-full font-extrabold text-md'>
            <div className=' space-y-6'>
          <ul>
          <div onClick={()=>scrollToSection(homeView)}   className=' bg-gradient-to-b from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent'>HOME</div>
    <div  className=" border border-darkOrange border-b opacity-50 mt-2"  />

          </ul>
       <ul> <div onClick={()=>scrollToSection(aboutView)}  className='bg-gradient-to-b from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent'>ABOUT US</div>
    <div  className=" border border-darkOrange border-b opacity-50 mt-2"  />

       </ul>
        <ul><div onClick={()=>scrollToSection(whyCAView)}  className='bg-gradient-to-b from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent'>WHY CA</div>
    <div  className=" border border-darkOrange border-b opacity-50 mt-2"  />

        </ul>

       <ul><div onClick={()=>scrollToSection(responsibilityView)}   className='bg-gradient-to-b from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent'>RESPONSIBILITIES</div>
    <div  className=" border border-darkOrange border-b opacity-50 mt-2"  />

       </ul> 
       <ul> <div onClick={()=>scrollToSection(incentiveView)}   className='bg-gradient-to-b from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent'>INCENTIVES</div>
    <div  className=" border border-darkOrange border-b opacity-50 mt-2"  />

       </ul>
       <ul><div onClick={()=>scrollToSection(FAQView)} className='bg-gradient-to-b from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent'>FAQs</div>
    <div  className=" border border-darkOrange border-b opacity-50 mt-2"  />

       </ul> 
      <ul> <div onClick={()=>scrollToSection(contactView)}   className='bg-gradient-to-b from-lightOrange via-orange-500 to-darkOrange bg-clip-text text-transparent'>CONTACT US</div>
    <div  className=" border border-darkOrange border-b opacity-50 mt-2"  />

      </ul> 
      </div>
          
        

      </div>
        </Box>
      </Modal>
    </div>
  );
}