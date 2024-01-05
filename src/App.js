import logo from './logo.svg'
import './App.css'
import Sunset from './sunset.jpg'

function App() {
  return (
    <div class="relative isolate bg-gray-900 text-center pt-16 h-screen mx-auto">
      <h1 class="text-8xl font-bold tracking-tight text-white">
        image generator
      </h1>
      <div class="flex px-32 space-x-16 justify-center">
        <div class="mt-10">
          <img class="object-cover rounded-md h-96" src={Sunset} alt="sunset" />
        </div>
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
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="pink unicorn eating apple"
            ></textarea>
          </div>
          <div class="flex content-center gap-x-8">
            <button class="flex-auto rounded-md bg-transparent border border-indigo-500 border-2 px-3.5 py-2.5 text-sm font-semibold text-indigo-500 shadow-sm hover:border-indigo-400 hover:text-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              clear
            </button>
            <button
              type="submit"
              class="flex-auto rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
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

export default App
