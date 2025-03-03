import { AnimatedBackground } from "@/components/ui/animated-background";
import { BLOG_POSTS } from "../data";
import { motion } from "motion/react";
import Link from "next/link";

export default function Blog({
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
            <h3 className="mb-3 text-lg font-medium">Blog</h3>
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
                    {BLOG_POSTS.map((post) => (
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
                            </div>
                        </Link>
                    ))}
                </AnimatedBackground>
            </div>
        </motion.section>
    )
}