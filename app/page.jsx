import questionEntry from '@/components/dataEntry'

const home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <nav className="justify-center flex span-x-29 py-8 px-12">
          
            <a href="#" className="text-gray-600 hover:text-gray-100 py-6 px-12">Home</a>
            <br/>
            <button className="bg-gray-900 text-white py-6 px-6  hover:bg-gray-600">New</button>
          
      </nav>
      </div>
      <div>
      <input placeholder="type your question" className="flex "></input>
      <ul className='flex span-x-12 items-center'>
      <li/><button className="bg-gray-900 text-white rounded-full py-3 px-6 hover:bg-gray-600">add</button>
      <li/><button className="bg-gray-900 text-white rounded-full py-3 px-6 hover:bg-gray-600">cancel</button>
      <li/><button className="bg-gray-900 text-white rounded-full hover:bg-gray-600"></button>
      </ul>
      </div>
      
      <questionEntry/>

    </main>
  )
}

export default home