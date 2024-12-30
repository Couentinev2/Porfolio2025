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
            I’m a creative developer who builds modern and engaging experiences
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
              className="object-cover w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">AppLovin Website</h3>
              <p className="text-sm text-gray-600">
              At AppLovin, I was responsible for designing and developing the entire website. I built reusable components
              and custom fields to empower the marketing team to manage and update content efficiently. My role involved creating a seamless user experience while adhering to branding and performance standards.

              </p>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="transition border rounded-lg shadow-sm hover:shadow-lg">
            <Image
              src="/images/tumblr_inline_nxzhhup3Kj1s1abfa_1280.png"
              alt="Project 2"
              width={1200}
              height={800}
              className="object-cover w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">BadgeList Backend Development</h3>
              <p className="text-sm text-gray-600">
              As a backend developer at BadgeList, I ensured the stability and scalability of the platform by managing
              infrastructure and optimizing database performance.              </p>
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
      <section className="px-6 py-16 bg-gray-50 lg:px-16">
        <h2 className="mb-8 text-3xl font-bold text-center sm:text-4xl">About Me</h2>
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6 text-center md:flex-row md:items-start md:space-y-0 md:space-x-8">
          <Image
              src="/images/quentin.jpg"
              alt="Profile picture"
            width={160}
            height={160}
            className="object-cover w-40 h-40 mb-4 rounded-full md:mb-0"
          />
          <div className="flex-1">
            <p className="mb-4 text-gray-700">
              I’m a developer with a passion for creating dynamic, user-friendly digital
              experiences. With a background in design and a keen eye for detail, I enjoy
              crafting solutions that delight end users.
            </p>
            <p className="mb-4 text-gray-700">
              When I’m not coding, you can find me exploring nature, experimenting with
              new design trends, or contributing to open source projects.
            </p>
            <Link
              href="/about"
              className="font-medium text-blue-600 hover:underline"
            >
              Read more about my journey →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-16 text-center text-white bg-indigo-600 lg:px-16">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let’s Work Together</h2>
        <p className="mb-6 text-gray-100">
          Whether you have an idea or just want to say hi, my inbox is always open.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 font-semibold text-indigo-600 transition-colors bg-white rounded hover:bg-gray-200"
        >
          Get In Touch
        </Link>
      </section>
    </main>
  );
}
