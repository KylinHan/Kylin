import Footer from "@/app/(web)/components/Footer";
import seo from "@/utils/seo";

export async function generateMetadata() {
  return seo({
    title: "Projects",
    description: "工作中一些值得展示的项目成果",
  });
}

export default function Projects() {
  return (
    <>
      {/* text-transparent text-stroke-2 text-stroke-hex-aaa */}
      <div className="text-3xl text-center font-semibold opacity-30 mb-8 mx-auto">
        Code Snippets
      </div>
      <div className="grid gap-4 prose mx-auto">该部分为常用代码片段收集</div>
      <Footer className="prose mx-auto" />
    </>
  );
}