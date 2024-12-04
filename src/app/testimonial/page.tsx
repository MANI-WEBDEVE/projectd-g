'use client';
import { TabsBtn, TabsProvider, TabsContent } from '@/components/tabs'
import React from 'react'

const Testimonial = () => {
  return (
    <div className="min-h-screen pt-24">
      <TabsProvider defaultValue={'login'} wobbly={true}>
        <div className='flex justify-center mt-2'>
          <div className='flex items-center flex-wrap dark:bg-[#1a1c20] bg-gray-200 p-1 mx-4 dark:text-white text-black rounded-md border'>
            <TabsBtn value='login'>
              <span className='relative z-[2] uppercase'>Login</span>
            </TabsBtn>
            <TabsBtn value='register'>
              <span className='relative z-[2] uppercase'>Register</span>
            </TabsBtn>
            <TabsBtn value='image'>
              <span className='relative z-[2] uppercase'>Image</span>
            </TabsBtn>
            <TabsBtn value='video'>
              <span className='relative z-[2] uppercase'>vide</span>
            </TabsBtn>
            <TabsBtn value='movie'>
              <span className='relative z-[2] uppercase'>Movie</span>
            </TabsBtn>
            <TabsBtn value='songs'>
              <span className='relative z-[2] uppercase'>songs</span>
            </TabsBtn>
          </div>
        </div>

        <TabsContent value='login'>
          <div className='p-2 border'>Hello</div>
        </TabsContent>
        <TabsContent value='register'>
          <div className='p-2 border'>World</div>
        </TabsContent>
      </TabsProvider>
    </div>
  )
}

export default Testimonial
