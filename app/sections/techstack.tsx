import { motion } from "motion/react";
import { TECH_STACK } from "../data";


function TechIcon({ icon, name }: { icon: string; name: string }) {
    return (
        <motion.div
            className="flex h-12 w-12 items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <div
                className="h-8 w-8 text-zinc-700 dark:text-zinc-300"
                dangerouslySetInnerHTML={{ __html: icon }}
            />
        </motion.div>
    );
}


export default function TechStack({
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
            <h3 className="mb-5 text-lg font-medium">TECHNOLOGIES</h3>
            <div className="relative w-full">
                {/* Gradient Masking */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[15px] bg-gradient-to-r from-white via-white to-transparent dark:from-zinc-950 dark:via-zinc-950" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[15px] bg-gradient-to-l from-white via-white to-transparent dark:from-zinc-950 dark:via-zinc-950" />

                {/* Scrolling Container */}
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{
                            x: [0, "-50%"]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        {/* Eine einzelne Kopie der Items ist ausreichend */}
                        <div className="flex gap-8 px-4">
                            {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                                <div key={tech.name + index} className="flex flex-col items-center">
                                    <div className="relative rounded-2xl bg-zinc-50/40 p-2 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                                        <TechIcon icon={tech.icon} name={tech.name} />
                                    </div>
                                    <span className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}