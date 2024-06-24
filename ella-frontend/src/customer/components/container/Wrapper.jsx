import React from 'react'
import RoundCard from '../card/RoundCard';
import Separator from '../utility/Separator';


const Wrapper = (props) => {

    const items = props.items;

    return (
        <div className='w-4/5 mx-auto'>
            <div className='flex gap-5 justify-center items-center flex-wrap'>
                {
                    items.map(item => (<RoundCard item={item}/>))
                }
            </div>
            <Separator/>
        </div>
    )
}

export default Wrapper