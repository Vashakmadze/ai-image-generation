import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from "../utils/index";
import { FormFields, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [Form, setForm] = useState({name: '', prompt: '', photo: ''});
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {

  }

  const generateImage = () => {

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[2rem]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[1rem] max-w[500px]'>
          Brwose Through a collection of images generated by DALL-E AI and share them with others
        </p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormFields 
            labelName="Your name" 
            type="text" 
            name="name" 
            placeholder="John Doe" 
            value={Form.name} 
            handlechange={handleChange}/>
          <FormFields 
            labelName="Prompt" 
            type="text" 
            name="Prompt" 
            placeholder="an armchair in the shape of an avocado" 
            value={Form.prompt} 
            handlechange={handleChange} 
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}/>

            <div className='relative bg-gray-5 border
            border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
              {Form.photo ? (
                <img src={Form.photo} alt={Form.prompt} className="w-full h-full object-contain"/>
              ) : (
                <img src={preview} alt="Preview Image" className='w-9/12 h-9/12 object-contain opacity-40'/>
              )}

              {
                generatingImage && (
                  <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                    <Loader />
                  </div>
                )
              }
            </div>
        </div>
        <div className='mt-5 flex gap-5'>
          <button type="button" onClick={generateImage} className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            {generatingImage ? 'Generation in process....' : "Generate"}
          </button>
        </div>
        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[1rem]'>Once you have created the image you want, you can share it with others</p>
          <button type="submit" className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
            {loading ? 'Sharing the image...' : "Share the image"}
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost