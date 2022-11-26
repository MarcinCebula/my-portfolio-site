import { type NextPage } from "next";
import Head from "next/head";
import ContactSection from "../sections/ContactSection";
import IntroSection from "../sections/IntroSection";
import ProjectSection from "../sections/ProjectSection";
import SkillSection from "../sections/SkillSection";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Welcome to my Personal Website</title>
        {/* <meta name="description" content="Generated by create-t3-app" /> */}
      </Head>
      <main className="bg-white text-slate-700">
        <IntroSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
