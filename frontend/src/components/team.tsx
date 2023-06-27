import Image from 'next/image';
import Man from "../../public/Man.png"
import Women from "../../public/Women.png"
const Team=()=>{
    return(
        <section>
  <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black-900 dark:text-white">Our Team</h2>
      <p className="font-light text-black-500 lg:mb-16 sm:text-xl dark:text-black-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex, deserunt cumque ea reprehenderit vero neque in quam eveniet id. Vero rem ipsam, impedit molestiae laborum saepe assumenda blanditiis nam?</p>
    </div> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-md">
        <a href="#">
          <Image src={Man} alt="Michael Avatar" />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-black-900 dark:text-white">
            <a href="#">Michael Gough</a>
          </h3>
          <span className="text-black-500 dark:text-black-400">Senior Front-end Developer</span>
        </div>
      </div> 
      <div className="items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-md">
        <a href="#">
          <Image src={Women} alt="Michael Avatar" />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-black-900 dark:text-white">
            <a href="#">Lana Del Rey</a>
          </h3>
          <span className="text-black-500 dark:text-black-400">Senior Front-end Developer</span>
        </div>
      </div> 
      <div className="items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-md">
        <a href="#">
          <Image src={Women} alt="Michael Avatar" />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-black-900 dark:text-white">
            <a href="#">Sharon Greig</a>
          </h3>
          <span className="text-black-500 dark:text-black-400">Senior Front-end Developer</span>
        </div>
      </div> 
      <div className="items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-md">
        <a href="#">
          <Image src={Man} alt="Michael Avatar" />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-black-900 dark:text-white">
            <a href="#">Adam Evans</a>
          </h3>
          <span className="text-black-500 dark:text-black-400">Senior Front-end Developer</span>
        </div>
      </div> 
    </div>  
  </div>
</section>

    )
}
export default Team;