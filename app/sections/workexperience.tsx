import { motion } from "motion/react";
import { WORK_EXPERIENCE } from "../data";
import { Spotlight } from "@/components/ui/spotlight";


export default function WorkExperience({
    variantsSection,
    transitionSection,
}: {
    variantsSection: any;
    transitionSection: any;
}) {
    return (
        <motion.section
            variants={variantsSection}
            transition={transitionSection}
        >
            <h3 className="mb-5 text-lg font-medium">WORK EXPERIENCE</h3>
            <div className="flex flex-col space-y-2">
                {WORK_EXPERIENCE.map((job) => (
                    <a
                        className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={job.id}
                    >
                        <Spotlight
                            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                            size={64}
                        />
                        <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                            <div className="relative flex w-full flex-row justify-between">
                                <div>
                                    <h4 className="font-normal dark:text-zinc-100">
                                        {job.title}
                                    </h4>
                                    <p className="text-zinc-500 dark:text-zinc-400">
                                        {job.company}
                                    </p>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    {job.start} - {job.end}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </motion.section>
    )
}