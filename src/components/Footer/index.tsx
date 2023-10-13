import React from 'react'
import tw from 'twin.macro'
import { LogoDarkWo } from '../../assets/images';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div tw='inline-flex px-[56px] w-full py-[72px] flex-row items-center justify-between gap-[10px]'>
        <Link to='/'><div tw='flex items-center justify-center gap-[15px] text-center'>
          <LogoDarkWo tw='h-[30px] w-[24px]' />
          <h1 tw='font-primary font-bold text-[32px]'>Wega</h1>
        </div></Link>
        <p tw='font-primary text-[21px]'>Play together, Own together.</p>
        <div tw='flex flex-row gap-[20px]'>
          <span><Link to='https://wega.gitbook.io/wega-litepaper/'>Documentation</Link></span>
          <span><Link to='https://wega.fun'>Play Beta</Link></span>
        </div>
      </div>
    </>
  )
}

export default Footer