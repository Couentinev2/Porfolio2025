'use client';
import Link from 'next/link';
import Image from 'next/image';


export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen text-gray-800 bg-white">
      <section className="relative flex flex-col items-center justify-center px-6 py-16 text-center text-white bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            My Projects
          </h1>
          <p className="max-w-2xl mx-auto text-base text-blue-100 sm:text-lg">
            Here you’ll find an overview of my professional journey and some of the key
            projects I’ve worked on.
          </p>
        </div>
      </section>

      <section className="max-w-5xl px-6 py-12 mx-auto">
        <h2 className="mb-4 text-2xl font-semibold">Current Role at AppLovin</h2>
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="flex-shrink-0">
            <Image
              src="/images/events_sponsors_trim_1017.png"
              alt="AppLovin Logo" 
              width={200}
              height={50}
              className="h-auto max-w-min"
            />
          </div>
          <div className="flex-1 leading-relaxed text-gray-700">
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

      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-6 text-2xl font-semibold">Highlighted Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* PROJECT 1 */}
            <article className="p-6 transition bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">AppLovin</h3>
              <p>
                At AppLovin, I was responsible for designing and developing the entire website. I built reusable components
                and custom fields to empower the marketing team to manage and update content efficiently.
              </p>
              <p className="mt-4">
                My role involved creating a seamless user experience while adhering to branding and performance standards.
              </p>
              <a 
            href="https://www.applovin.com/"
            target="_blank" 
    rel="noopener noreferrer" 
    className="inline-block mt-4 text-blue-500 hover:underline"
    >
    View Site
  </a>
            </article>

            {/* PROJECT 2 */}
            <article className="p-6 transition bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">BadgeList</h3>
              <p>
                As a backend developer at BadgeList, I ensured the stability and scalability of the platform by managing
                infrastructure and optimizing database performance.
              </p>
              <p className="mt-4">
                My work included API development and system integrations, contributing to the platform's reliability and user satisfaction.
              </p>
              <a 
            href="https://badgelist.com/"
            target="_blank" 
    rel="noopener noreferrer" 
    className="inline-block mt-4 text-blue-500 hover:underline"
    >
    View Site
  </a>
            </article>
            
            {/* PROJECT 3 */}

            <article className="p-6 transition bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
            <h3 className="mb-2 text-xl font-semibold">Travel Helper Application</h3>
<p>
  As someone who loves to travel and discover new experiences, I created the Travel Helper Application to make trip planning easier and more enjoyable. 
  This tool generates personalized itineraries based on user preferences, acting as a reliable companion for exploring new destinations.
</p>
<p className="mt-4">
  I designed and implemented key features, including an AI-powered trip advisor using the OpenAI API, and focused on building a responsive interface alongside robust backend integrations for a seamless user experience.
</p>

  <a 
            href="/travel"
            target="_blank" 
    rel="noopener noreferrer" 
    className="inline-block mt-4 text-blue-500 hover:underline"
  >
    View Project
  </a>
</article>

          </div>

          <div className="mt-10">
          <a
    href="mailto:contact@quentinguillaume.com"
    className="inline-block px-6 py-3 font-semibold text-indigo-600 transition-colors bg-white rounded hover:bg-gray-200"
  >
    Contact Me
  </a>
          </div>
        </div>
      </section>
    </main>
  );
}
