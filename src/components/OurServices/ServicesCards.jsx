import React from 'react'


function ServicesCards({
    svg, title, description
}) {
    
  return (
    <div>
        <div className=' p-4 flex items-center flex-col justify-center rounded-lg'>
              <div className=" items-center justify-center mb-8 w-12 rounded-full lg:h-12 lg:w-12">
                 {svg}
              </div>
          </div>
              <h3 className="mb-2 text-lg font-bold text-[var(--main-color)] uppercase headings xl:text-xl">{title}</h3>
              <p className="text-[var(--text-color)] subHeadings xl:text-lg">{description}</p>
    </div>
  )
}

export default ServicesCards