'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full min-h-screen text-gray-800 bg-white">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 overflow-hidden text-white bg-gradient-to-br from-blue-500 to-indigo-600">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg sm:text-xl">
  Hi, I’m Quentin Guillaume — a passionate developer dedicated to crafting modern websites and innovative applications.
</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 font-semibold text-blue-600 transition-colors bg-white rounded hover:bg-gray-200"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 font-semibold text-white transition-colors bg-transparent border-2 border-white rounded hover:bg-white hover:text-blue-600"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-6 py-16 m-auto lg:px-16 xl:container">
        <h2 className="mb-8 text-3xl font-bold text-center sm:text-4xl">Featured Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* Project Card 1 */}
          <div className="transition border rounded-lg shadow-sm hover:shadow-lg">
            <Image
              src="/images/Generic_Applovin.jpg"
              alt="Project 1"
              width={1200}
              height={800}
              className="object-cover w-full rounded-t-lg max-h-80"
            />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">AppLovin Websites</h3>
              <p className="text-sm text-gray-600">
              At AppLovin, I was responsible for designing and developing the entire websites. I built reusable components
              and custom fields to empower the marketing team to manage and update content efficiently. My role involved creating a seamless user experience while adhering to branding and performance standards.

              </p>
              <a 
            href="https://www.applovin.com/"
            target="_blank" 
    rel="noopener noreferrer" 
    className="inline-block mt-4 text-blue-500 hover:underline"
    >
    View Site
  </a>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="transition border rounded-lg shadow-sm hover:shadow-lg">
  <Image
    src="/images/1665122941198.jpg"
    alt="Travel Planner Project"
    width={1200}
    height={800}
    className="object-cover w-full rounded-t-lg max-h-80"
  />
  <div className="p-4">
    <h3 className="mb-2 text-xl font-semibold">Travel Planner Application</h3>
    <p className="text-sm text-gray-600">
      The Travel Planner Application simplifies trip planning by generating personalized itineraries based on user preferences. I designed and implemented core features, including an AI-powered trip advisor, leveraging the OpenAI API, and ensuring smooth user interactions.
    </p>
    <a 
            href="/travel"
            target="_blank" 
      rel="noopener noreferrer" 
      className="inline-block mt-2 text-blue-500 hover:underline"
    >
      View Project
    </a>
  </div>
</div>


        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}


      {/* CTA SECTION */}
      <section className="px-6 py-16 text-center text-white bg-indigo-600 lg:px-16">
  <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let’s Work Together</h2>
  <p className="mb-6 text-gray-100">
    Whether you have an idea or just want to say hi, my inbox is always open.
  </p>
  <a
    href="mailto:contact@quentinguillaume.com"
    className="inline-block px-6 py-3 font-semibold text-indigo-600 transition-colors bg-white rounded hover:bg-gray-200"
  >
    Get In Touch
  </a>
</section>


    </main>
  );
}
