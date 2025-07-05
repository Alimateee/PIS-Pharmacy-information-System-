import { AnimatePresence, motion } from "framer-motion";

export default function Alert_Add({popup , text , top_position}: any) {
    return (
        <>
            <AnimatePresence>
                {
                    popup && (
                        <motion.div
                            className="popup_AddProfile"
                            style={{
                                position: 'fixed',
                                background: 'white',
                                padding: '.6rem',
                                backgroundColor: '#8BC34A',
                                color: 'white',
                                borderRadius: '8px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                zIndex: 1000,
                                top: top_position,
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
                            <div className="alert_addProfile_container">
                                <h4 className="text_animate_add_profile">
                                    {text}
                                </h4>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}