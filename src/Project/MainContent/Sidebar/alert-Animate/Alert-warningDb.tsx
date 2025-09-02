import { AnimatePresence, motion } from "framer-motion"
export default function Alert_warningDb({ popupWarningDb }: any) {
    const [showPopup_dbstat, showPopup_dbstat_connect] = popupWarningDb
    return (
        <>
            <AnimatePresence>
                {showPopup_dbstat && (
                    <motion.div
                        className="popup_dbstat"
                        style={{
                            position: 'fixed',
                            background: 'white',
                            padding: '1rem',
                            backgroundColor: 'rgb(255, 121, 121)',
                            color: 'white',
                            fontWeight: "bold",
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            zIndex: 1000,
                            bottom: '20px',
                            right: '50px'
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 9, transition: { duration: 0.3 } },
                            exit: { opacity: 0, x: 100, transition: { duration: 0.3 } },
                        }}
                    >
                        <div className="contain-Animate-Drug-dbstat">
                            <h4 className="text-animate-Drug-dbstat">database connection failes !! Please contact with Admin</h4>
                        </div>
                    </motion.div>
                )}
                {showPopup_dbstat_connect && (
                    <motion.div
                        className="popup_dbstat"
                        style={{
                            position: 'fixed',
                            background: 'white',
                            padding: '1rem',
                            backgroundColor: ' #8BC34A',
                            color: 'white',
                            fontWeight: "bold",
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            zIndex: 1000,
                            bottom: '20px',
                            right: '50px'
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 9, transition: { duration: 0.3 } },
                            exit: { opacity: 0, x: 100, transition: { duration: 0.3 } },
                        }}
                    >
                        <div className="contain-Animate-Drug-dbstat">
                            <h4 className="text-animate-Drug-dbstat">Connection Successfull </h4>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
} 
