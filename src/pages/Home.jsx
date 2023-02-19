import React, {useState, useEffect} from 'react';
import { Loader, Card, FormFields, RenderCards } from "../components/index";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("")
  
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[2rem]'>The Community Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[1rem] max-w[500px]'>
          Brwose Through a collection of images generated by DALL-E AI
        </p>
      </div>
      <div className='mt-16'>
        <FormFields />
      </div>
      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
        <>
        {searchText && (
          <h2 className='font-medium text-[#666e75] text-xl mb-3'>Showing Results for <span className='text-[#222328]'>{searchText}</span></h2>
        )}
        <div className='grid lg:gird-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
          {searchText ? (
            <RenderCards data={[]} title="No Search Results found" />
          ) : (
            <RenderCards data={[]} title="No Posts Found" />
          )}
        </div>
        </>
        )}
      </div>
    </section>
  )
}

export default Home