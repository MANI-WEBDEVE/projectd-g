import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Discuss",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-base font-normal mb-8"></p>
          <div className="grid grid-cols-2 gap-4">
            <h2 className=" text-xl font-bold  border-[1px] border-slate-600/15 px-5 py-2 rounded-md flex items-center justify-center">
              Discovery, Research & Initial Consultation
            </h2>
            <h2 className=" text-sm font-light px-5 py-2 rounded-md  border-[1px] border-slate-600/15">
              In this foundational step, we connect with the client to fully
              understand their vision, business goals, and target audience.
              Through detailed discussions and research, we explore the client’s
              industry, competitors, and unique needs.
            </h2>
            <h2 className=" text-sm font-light px-5 py-2 rounded-md border-[1px] border-slate-600/15">
              This process allows us to uncover valuable insights and pinpoint
              key challenges. The information gathered here lays the groundwork
              for a strategic and customized approach to the project.
            </h2>
            <Image src={'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=600'} width={280} height={300} className="w-full h-full object-cover" alt="dicussion"/>
          </div>
        </div>
      ),
    },
    {
      title: "Creative concept",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-base font-normal mb-8"></p>
          <div className="grid grid-cols-2 gap-4">
            <h2 className=" text-xl font-bold  border-[1px] border-slate-600/15 px-5 py-2 rounded-md flex items-center justify-center">
              Creative Concept & Strategic Ideation
            </h2>
            <h2 className=" text-sm font-light px-5 py-2 rounded-md  border-[1px] border-slate-600/15">
              In this phase, we transform insights into innovative concepts that
              align with the client’s vision and brand identity. Our team
              brainstorms unique ideas, blending creativity with strategic
              planning to develop solutions that stand out.
            </h2>
            <h2 className=" text-sm font-light px-5 py-2 rounded-md border-[1px] border-slate-600/15">
              We craft initial concepts and visual mockups that capture the
              project’s direction and desired impact. This step ensures that our
              approach resonates with the target audience and meets business
              objectives.
            </h2>
          </div>
        </div>
      ),
    },
    {
      title: "Production",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-base font-normal mb-8"></p>
          <div className="grid grid-cols-2 gap-4">
            <h2 className=" text-xl font-bold  border-[1px] border-slate-600/15 px-5 py-2 rounded-md flex items-center justify-center">
              Production, Design & Development Execution
            </h2>
            <h2 className=" text-sm font-light px-5 py-2 rounded-md  border-[1px] border-slate-600/15">
              During the production phase, our team brings the creative concepts
              to life with meticulous attention to detail. Designers craft
              visually engaging assets, while developers build the digital
              infrastructure, ensuring a cohesive and functional experience.
            </h2>
            <h2 className=" text-sm font-light px-5 py-2 rounded-md border-[1px] border-slate-600/15">
              This step involves close collaboration to ensure that each element
              aligns with the project’s vision. Quality control is embedded
              throughout, ensuring a seamless and polished final product.
            </h2>
          </div>
        </div>
      ),
    },
    {
      title: "HAPPY CLIENT",
      content: (
        <div>
          <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-base font-normal mb-8"></p>
          <div className="grid grid-cols-2 gap-4">
            <h2 className=" text-xl font-bold  border-[1px] border-slate-600/15 px-5 py-2 rounded-md flex items-center justify-center">
              Client Satisfaction & Project Completion
            </h2>
            <h2 className=" text-sm font-light px-5 py-2 rounded-md  border-[1px] border-slate-600/15">
              In this final step, we review the project with the client to
              ensure it meets their expectations and goals. We gather feedback,
              make any necessary adjustments, and provide guidance for smooth
              implementation.
            </h2>
            <h2 className=" text-sm font-light px-5 py-2 rounded-md border-[1px] border-slate-600/15">
              Our priority is to deliver a product that not only satisfies but
              delights the client, building a foundation for long-term success.
              A successful handover ensures that the client is fully equipped
              and confident moving forward.
            </h2>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
