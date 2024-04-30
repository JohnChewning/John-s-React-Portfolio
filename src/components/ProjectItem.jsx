import React from 'react';

const ProjectItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#f7e3e3]'>
        <img src={img} alt={title} className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] left-{50%] translate-y-[-50%]'>
            <h3 className='text-3xl font-bold text-[#504f4f] tracking-wider text-center justify-center'>           
                {title}
            </h3>
        </div>
    </div>
  )
}

export default ProjectItem;