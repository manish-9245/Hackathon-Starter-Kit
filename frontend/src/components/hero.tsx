import Image from 'next/image';
import Phone from "../../public/phone-mockup.png"
import HeroImg from "../../public/hero.png"
const Hero = () => {
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hackathon Topic
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Introduce your hackathon solution in brief in these lines : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quae quaerat dolores amet, tempore perferendis inventore eius adipisci laborum facere ducimus repellendus id magni alias distinctio similique nemo quia quidem?
          </p>
          <a
            href="#"
            className="inline-flex justify-start px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <div className="flex justify-start">
  <button className="px-4 py-2 bg-transparent text-black border border-black hover:shadow-md hover:bg-opacity-75 rounded">Get Started</button>
</div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={HeroImg} alt="mockup" quality={100} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
