import { AnimatedBackground } from "@/components/ui/animated-background";
import { BLOG_POSTS } from "../data";
import { motion } from "motion/react";
import Link from "next/link";

export default function ListComponent({
    variantsSection,
    transitionSection,
    children,
}: {
    variantsSection: any;
    transitionSection: any;
    children: React.ReactNode;
}) {
    return (
        <motion.section
            variants={variantsSection}
            transition={transitionSection}
        >
            <h3 className="mb-3 text-lg font-medium">Blog</h3>
            <div className="flex flex-col space-y-0">
                {children}
            </div>
        </motion.section>
    )
}