import React from 'react'
import PropTypes from 'prop-types'

export default function HomeCard(props) {
  return(
    <div className="2xl:px-14 xl:px-8 lg:px-4 2xl:w-[28%] xl:w-[30%] lg:w-[32%] pb-20 rounded-[60px] bg-noct-white flex justify-center items-center shadow-out-around shadow-noct-black">
      <div>
        <h2 className='mx-auto w-fit text-center text-3xl font-bold text-noct-black'>
          {props.header}
        </h2>
        <p className="text-2xl 2xl:pt-10 xl:pt-8 lg:pt-6 mx-auto my-auto text-center w-full">
          {props.paragraph}
        </p>
      </div>
    </div>
  )
}

HomeCard.propTypes = {
  header: PropTypes.string,
  paragraph: PropTypes.string,
}
