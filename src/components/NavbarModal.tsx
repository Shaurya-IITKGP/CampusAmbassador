import  React , {useContext} from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MyContext } from './Context.jsx';


const style = {
  position: 'absolute',
  top: '10vh',
  left: '10vw',
  width: '80vw',   // Full width of the viewport
  height: '80vh',  // Full height of the viewport
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
      className=" h-full w-full"
        open={isModalOpen}
        onClose={handleModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=' text-lightOrange shadow-xl shadow-lightOrange bg-slate-900 bg-opacity-95 rounded-2xl'>
          <div className=" flex justify-between">
          <Typography id="modal-modal-title" variant="h4" component="h2" className=" underline underline-offset-6">
            Contents
          </Typography>
          <button onClick={handleClose} className="cursor-pointer font-extrabold ">
          &times;
          </button>
          </div>
          <div id='main-components' className=' cursor-pointer mt-12 flex flex-col h-full font-extrabold text-xl'>
            <div className=' space-y-12'>
          <li>
          <div onClick={()=>scrollToSection(homeView)}   className=''>HOME</div>
          </li>
       <li> <div onClick={()=>scrollToSection(aboutView)}  className='hover:text-lightOrange'>ABOUT US</div></li>
        <li><div onClick={()=>scrollToSection(whyCAView)}  className='hover:text-lightOrange'>WHY CA</div></li>
       <li><div onClick={()=>scrollToSection(responsibilityView)}   className='hover:text-lightOrange'>RESPONSIBILITIES</div></li> 
       <li> <div onClick={()=>scrollToSection(incentiveView)}   className='hover:text-lightOrange'>INCENTIVES</div></li>
       <li><div onClick={()=>scrollToSection(FAQView)} className='hover:text-lightOrange'>FAQs</div></li> 
      <li> <div onClick={()=>scrollToSection(contactView)}   className='hover:text-lightOrange'>CONTACT US</div></li> 
      </div>
          
        

      </div>
        </Box>
      </Modal>
    </div>
  );
}