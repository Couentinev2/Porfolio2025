'use client';
import Link from 'next/link';
import Image from 'next/image';


export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-800">
      <section className="relative flex flex-col items-center justify-center px-6 py-16 text-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            My Projects
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-blue-100">
            Here you’ll find an overview of my professional journey and some of the key
            projects I’ve worked on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-4 text-2xl font-semibold">Current Role at AppLovin</h2>
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="flex-shrink-0">
            <Image
              src="/images/events_sponsors_trim_1017.png"
              alt="AppLovin Logo" 
              width={200}
              height={50}
              className="max-w-min h-auto"
            />
          </div>
          <div className="flex-1 text-gray-700 leading-relaxed">
            <p>
              I’m proud to be part of the team at{' '}
              <a
                href="https://www.applovin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline decoration-blue-600 hover:text-blue-800"
              >
                AppLovin
              </a>
              , a leading marketing platform that helps mobile app developers
              grow their businesses. My role involves building innovative
              solutions that connect advertisers with high-quality audiences,
              driving growth and engagement across the mobile ecosystem.
            </p>
            <p className="mt-4">
              Working at AppLovin allows me to collaborate with a diverse team
              of engineers, designers, and product managers, all focused on
              delivering a seamless and impactful experience for our partners.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-2xl font-semibold">Highlighted Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* PROJECT 1 */}
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">AppLovin</h3>
              <p>
                At AppLovin, I was responsible for designing and developing the entire website. I built reusable components
                and custom fields to empower the marketing team to manage and update content efficiently.
              </p>
              <p className="mt-4">
                My role involved creating a seamless user experience while adhering to branding and performance standards.
              </p>
            </article>

            {/* PROJECT 2 */}
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">BadgeList</h3>
              <p>
                As a backend developer at BadgeList, I ensured the stability and scalability of the platform by managing
                infrastructure and optimizing database performance.
              </p>
              <p className="mt-4">
                My work included API development and system integrations, contributing to the platform's reliability and user satisfaction.
              </p>
            </article>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
