"use client";

import CustomLayout from "@/components/Layout/CustomLayout";
import ContextProvider from "@/context/ContextProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Providers({ children }) {
  const router = useRouter();
  return (
    <>
      <ContextProvider>
        <CustomLayout>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              exit="exitAnimation"
              transition={{
                duration: 0.75,
              }}
              variants={{
                pageInitial: {
                  opacity: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                pageAnimate: {
                  scale: 1,
                  opacity: 1,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                exitAnimation: {
                  clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                },
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </CustomLayout>
      </ContextProvider>
    </>
  );
}
