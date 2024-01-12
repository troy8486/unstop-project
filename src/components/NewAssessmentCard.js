import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../utlis/appSlice'
import AddIcon from '@mui/icons-material/Add';

const NewAssesmentCard = () => {
    const dispatch = useDispatch()
    const handleModal = () => {
        dispatch(toggleModal())
    }
    const opacity = 1
  return (
    <div className='flex flex-col justify-center items-center bg-sky-100 w-[98%] md:w-[32%] h-60 rounded-2xl cursor-pointer my-2 '
    onClick={handleModal}>
        <div className='flex justify-center items-center w-16 h-16 bg-white rounded-full'>
            <AddIcon style={{fontSize: 50, color: `rgba(12, 74, 110, ${opacity})`}}/>
        </div>
        <div className='text-xl text-sky-900 font-semibold m-2'>New Assessment</div>
        <div className='text-center text-sm text-sky-900 font-normal m-2'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</div>
    </div>
  )
}

export default NewAssesmentCard