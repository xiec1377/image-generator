import React, { useRef, useState } from 'react'
import Sunset from '../sunset.png'

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState('/')
  let inputRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const generate = async () => {
    if (inputRef.current.value === '') {
      return 0
    }
    setLoading(true)
    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          'User-Agent': 'Chrome',
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: '512x512',
        }),
      },
    )
    let data = await response.json()
    let dataArr = data.data
    console.log('data arr 0:', dataArr[0])
    setImageUrl(dataArr[0].url)
    setLoading(false)
    // console.log('data:', data)
  }
  return (
    <div class="relative isolate bg-gray-900 text-center pt-16 h-screen mx-auto">
      <h1 class="text-8xl font-bold tracking-tight text-white">
        image generator
      </h1>
      <div class="flex px-32 space-x-16 justify-center">
        {loading ? (
          <div role="status" class="mt-10 grid place-items-center w-96">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <div class="mt-10">
            <img
              class="object-cover rounded-md w-96"
              src={imageUrl === '/' ? Sunset : imageUrl}
              alt="sunset"
            />
          </div>
        )}
        <div>
          <p class="mt-8 mb-2 text-md leading-8 text-gray-300">
            input a prompt and click ‘enter’ to see your prompt come to life
          </p>
          <div class="mb-6">
            {/* <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Large input
          </label> */}
            {/* <input
              type="text"
              id="large-input"
              placeholder='pink unicorn eating apple'
              class="text-wrap block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            /> */}
            <input
              id="message"
              rows="4"
              type="text"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="pink unicorn eating apple"
              ref={inputRef}
              onChange={handleChange}
              value={message}
            ></input>
          </div>
          <div class="flex content-center gap-x-8">
            <button
              onClick={() => setMessage('')}
              class="flex-auto rounded-md bg-transparent border border-indigo-500 border-2 px-3.5 py-2.5 text-sm font-semibold text-indigo-500 shadow-sm hover:border-indigo-400 hover:text-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              clear
            </button>
            <button
              type="submit"
              class="flex-auto rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              onClick={() => {
                generate()
              }}
            >
              go
            </button>{' '}
          </div>
        </div>
      </div>
      {/* <div
        class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      ></div> */}
    </div>
  )
}

export default ImageGenerator
