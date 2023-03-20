import Head from "next/head";
import SLogo from "@components/SLogo";
import SLink from "@components/SLink";
import SText from "@components/SText";
import Link from "next/link";
import { useEffect } from "react";
import useLocalStorage from "lib/useLocalStorage";
import SebastianMorales from "@components/SebastianMorales";
import { getSortedPostsData, getPostsCount } from "lib/posts";
import BlogSection from "@components/Sections/BlogSection";

export default function Home({ allPostsData, postsCount }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <Head>
        <title>sebasmorant.</title>
      </Head>
      <header className="mx-5 mt-8 mb-20 md:my-20 md:mx-auto md:max-w-[900px] md:w-full">
        <div className="flex md:justify-between justify-center flex-wrap">
          <div className="flex text-center mb-7">
            <Link href="/">
              <SLogo />
            </Link>
          </div>
          <div className="flex text-center justify-center">
            <ul className="flex text-3xl font-bold gap-x-[1.5rem]">
              <li>
                <SLink href="#perfil">perfil</SLink>
              </li>
              <li>
                <SLink href="#blog">blog</SLink>
              </li>
              <li>
                <SLink href="mailto:sebasmoraresu@gmail.com">contacto</SLink>
              </li>
            </ul>
            <button
              onClick={toggleTheme}
              className="fixed z-90 bottom-10 right-8 bg-sblue w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center transition-colors dark:bg-swhite"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="dark:hidden"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                <path d="M19 11h2m-1 -1v2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden dark:block"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="4" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="mx-auto my-40 md:max-w-[900px] md:w-full md:mb-72">
          <div className="md:grid flex flex-wrap flex-col-reverse gap-1">
            <SebastianMorales />
            <span className="text-center text-3xl font-extralight dark:text-swhite">
              Full-stack developer
            </span>
          </div>
        </section>
        <section className="mx-5 md:mx-auto md:max-w-[900px] md:w-full">
          <div id="perfil" className="mb-24">
            <SText>Perfil</SText>
          </div>
          <div className="md:grid md:grid-cols-section-me flex flex-wrap gap-1 mb-24 dark:text-swhite">
            <div>
              <p className="text-lg font-black">SOBRE MÍ</p>
              <h1 className="my-8 font-black text-3xl">
                Desarrollador web, MERN stack y backend.
              </h1>
              <div className="space-x-5">
                <a
                  alt="CV en PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="./pdf/CV_Sebastian Morales ENG.pdf"
                  download
                >
                  <button className="bg-sblue p-3 font-bold hover:shadow-xl text-swhite rounded shadow-lg">
                    <div className="justify-between flex items-center space-x-2">
                      <svg
                        className="fill-swhite"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 20h3v-5h2v5h3l-4 4-4-4zm11.479-12.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
                      </svg>
                      <span>Descargar CV</span>
                    </div>
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sebasmorant"
                >
                  <button className="bg-sblue p-3 font-bold hover:shadow-xl text-swhite rounded-full shadow-lg">
                    <svg
                      className="fill-swhite"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/nzkdevsaider"
                >
                  <button className="bg-sblue p-3 font-bold hover:shadow-xl text-swhite rounded-full shadow-lg">
                    <svg
                      className="fill-swhite"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div>
              <p className="text-1xl my-5 text-justify">
                Desarrollador web con experiencia en aplicaciones web, frontend
                y backend, gestión de ERP, metodologías agiles y desarrollo de
                apps móviles. Entusiasta de tecnología moderna, ciencia de
                datos, ciberseguridad e IA. Asertivo, apasionado, analítico y
                crítico. Dedicado a lograr objetivos medibles y satisfactorios.
              </p>{" "}
            </div>
          </div>
        </section>
        <BlogSection postsData={{ posts: allPostsData, count: postsCount }} />
      </main>
      <footer className="bg-sblack text-swhite p-4">
        <div className="flex flex-wrap justify-center md:justify-between md:my-4 md:mx-24">
          <div>
            <SLogo light={true} />
            <button className="bg-sblue p-3 font-bold hover:shadow-xl rounded shadow-lg my-5">
              <Link href="mailto:sebasmoraresu@gmail.com">Contacto</Link>
            </button>
          </div>
          <div className="px-4 py-6 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center">
              © {new Date().getFullYear()} sebasmorant.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const postsCount = getPostsCount();

  return {
    props: {
      allPostsData,
      postsCount,
    },
  };
}
