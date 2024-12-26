import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiEthereum, SiSolidity, SiTailwindcss, SiBootstrap, SiDjango, SiPython, SiC, SiCplusplus, SiLinux, SiGit, SiMysql } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* React */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        {/* JavaScript */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        {/* HTML */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-500" />
        </div>
        {/* CSS */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-500" />
        </div>
        {/* Solidity */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSolidity className="text-7xl text-white" />
        </div>
        {/* Tailwind CSS */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-blue-400" />
        </div>
        {/* Bootstrap */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiBootstrap className="text-7xl text-purple-600" />
        </div>
        {/* Django */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDjango className="text-7xl text-green-800" />
        </div>
        {/* Python */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-500" />
        </div>
        {/* C */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiC className="text-7xl text-blue-500" />
        </div>
        {/* C++ */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-700" />
        </div>
        {/* Git */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGit className="text-7xl text-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
