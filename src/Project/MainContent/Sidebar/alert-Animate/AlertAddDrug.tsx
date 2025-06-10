import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function AlertAddDrug({ popup }: any) {
    return (
        <>
            <AnimatePresence>
                {popup && (
                    <motion.div
                        className="popup"
                        style={{
                            position: 'fixed',
                            background: 'white',
                            padding: '.6rem',
                            backgroundColor: '#8BC34A',
                            color: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            zIndex: 1000,
                            top: '340px',
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 9, transition: { duration: 0.3 } },
                            exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
                        }}
                    >
                        <div className="contain-Animate-Drug">
                            <h4 className="text-animate-Drug">Drug Added!</h4>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}