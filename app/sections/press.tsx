import { AnimatedBackground } from "@/components/ui/animated-background";
import { PRESS_POSTS } from "../data";
import { motion } from "motion/react";
import Link from "next/link";

export default function Press({
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
            <h3 className="mb-3 text-lg font-medium">PRESS AND MEDIA</h3>
            <div className="flex flex-col space-y-0">
                <AnimatedBackground
                    enableHover
                    className="-mx-3 rounded-xl px-3 py-3"
                    transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2,
                    }}
                >
                    {PRESS_POSTS.map((post) => (
                        <Link
                            key={post.uid}
                            className="-mx-3 rounded-xl px-3 py-3 group"
                            href={post.link}
                            data-id={post.uid}
                        >
                            <div className="flex flex-col space-y-1">
                                <h4 className="font-normal dark:text-zinc-100 group-hover:text-white">
                                    {post.title}
                                </h4>
                                <p className="text-zinc-400 dark:text-zinc-400 group-hover:text-white/80">
                                    {post.description}
                                </p>
                                <div className="flex justify-between">
                                    <span className="text-sm text-zinc-400 dark:text-zinc-500 group-hover:text-white/70">
                                        {post.company}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </AnimatedBackground>
            </div>
        </motion.section>
    )
}



// import { AnimatedBackground } from "@/components/ui/animated-background";
// import { Link } from "lucide-react";
// import { motion } from "motion/react";
// import { PRESS_POSTS } from "../data";

// // Take VARIANTS_SECTION and TRANSITION_SECTION as props
// export default function Press({
//     variantsSection,
//     transitionSection,
// }: {
//     variantsSection: any;
//     transitionSection: any;
// }) {
//     return (
//         <motion.section
//             variants={variantsSection}
//             transition={transitionSection}
//         >
//             <h3 className="mb-3 text-lg font-medium">Press & Media</h3>
//             <div className="flex flex-col space-y-0">
//                 <AnimatedBackground
//                     enableHover
//                     className="h-full w-full rounded-lg"
//                     transition={{
//                         type: 'spring',
//                         bounce: 0,
//                         duration: 1,
//                     }}
//                 >
//                     {PRESS_POSTS.map((post) => (
//                         <a
//                             data-id={post.uid}
//                             href={post.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="group -mx-3 rounded-xl px-3 py-3 transition-all duration-300 bg-zinc-100 dark:bg-zinc-900/80"
//                         >
//                             <div className="flex flex-col space-y-1 transition-colors duration-300 group-hover:text-white">
//                                 <h4 className="font-normal dark:text-zinc-100 group-hover:text-white">
//                                     {post.title}
//                                 </h4>
//                                 <p className="text-zinc-500 dark:text-zinc-400 group-hover:text-white/80">
//                                     {post.description}
//                                 </p>
//                                
//                             </div>
//                         </a>
//                     ))}
//                 </AnimatedBackground>
//             </div>
//         </motion.section>
//     )
// }
