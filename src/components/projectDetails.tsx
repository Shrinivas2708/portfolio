import { useParams } from "react-router-dom";
import { BLUR_DELAY, SkillsData } from "../lib/utils";
import { BlurFade } from "./blur-fade";
import { ProjectData } from "../lib/projectData";
import { LinkPreview } from "./link-preview";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";

export default function ProjectDetail() {
  const { category } = useParams();
  const filtered = ProjectData.filter((p) => p.category === category);

  return (
    <div >
      <BlurFade delay={BLUR_DELAY * 13}>
        <p className="text-2xl font-semibold">{category}</p>
      </BlurFade>

      <div className="mt-5 flex flex-col gap-3">
        {filtered.map((v, i) => {
          return (
            <BlurFade delay={BLUR_DELAY * 15 + i * 0.05} key={i}>
              <LinkPreview url={v.videoLink} link={v.link}>
                <div className="flex cursor-pointer flex-col gap-3 rounded-xl border border-black/10 p-2 px-3 md:flex-row">
                  {/* Image */}
                  <div className="pointer-events-none flex w-full items-center md:w-[300px]">
                    <img
                      src={v.imgLink}
                      alt={v.title}
                      className="h-auto w-full rounded-lg object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-1 flex-col gap-2">
                    <p className="text-xl font-semibold md:text-2xl">
                      {v.title}
                    </p>
                    <p className="text-justify text-sm leading-relaxed md:text-base">
                      {v.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {v.stack.map((skill, i) => {
                        const data = SkillsData.find((vv) =>
                          vv.name.toLowerCase().includes(skill.toLowerCase()),
                        );
                        if (!data) return <div
                            key={i}
                            className="flex items-center gap-1 rounded-full border border-black/10 bg-white/70 px-2 py-1 transition"
                          >
                            
                            <p className="text-xs font-light md:text-sm">
                              {skill}
                            </p>
                          </div>;
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-1 rounded-full border border-black/10 bg-white/70 px-2 py-1 transition"
                          >
                            <img
                              src={data.imgUrl}
                              alt={data.name}
                              className="h-4 w-4 rounded-lg"
                            />
                            <p className="text-xs font-light md:text-sm">
                              {data.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Links */}
                    <div className="flex justify-end gap-2 text-gray-300 md:mt-2 md:pr-3">
                      <IconBrandGithub
                        onClick={() => window.open(v.repoLink)}
                        className="h-5 w-5 md:h-6 md:w-6"
                      />
                      <IconLink
                        onClick={() => window.open(v.link)}
                        className="h-5 w-5 md:h-6 md:w-6"
                      />
                    </div>
                  </div>
                </div>
              </LinkPreview>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
