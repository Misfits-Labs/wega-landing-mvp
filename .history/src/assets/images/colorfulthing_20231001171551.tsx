import React from 'react'
import tw from 'twin.macro'
import ColorfulOrbs from './ColorfulOrbs'
import { Link } from 'react-router-dom'
import { ArrowTrSquareIcon } from '../icons'
const colorfulthing = () => {
    return (

        <div tw='w-[360px] h-[247px] flex flex-col md:flex-row items-center justify-center md:justify-evenly md:h-[112px] md:w-[980px] md:bg-gray-700 rounded-3xl border p-2'>
            <div tw='flex flex-col items-start gap-[24px] md:gap-[16px] mb-[16px] justify-center'>
                <p tw='text-[21px] md:text-[28px] font-semibold'>Powered by Wega Protocol</p>
                <p tw='text-[16px] md:text-[20px]'>The leading NFT betting protocol aimed at expanding NFT use cases across different platforms.</p>
            </div>
            <Link to='https://wega.gitbook.io/wega-litepaper/'
            ><button tw='flex py-[12px] px-[24px] rounded-[5px] justify-center mb-[16px] w-[330px] items-center gap-[10px] font-bold border self-stretch'>Learn More<ArrowTrSquareIcon /></button></Link>
        </div>
    )
}

export default colorfulthing