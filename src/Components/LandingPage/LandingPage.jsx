import "./style.css";
import phone from "./phone.png";
import gradient from "./gradient.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { Button } from "@mui/material";


const LandingPage = () => {
  return (
    <main>
      <div className="textContainer">
        <motion.h1
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="Track-crypto-heading"
        >
            Step Wise
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="Real-Time-heading"
        >
          An Export Navigator.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          Streamline your export journey, one step at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="buttonContainer"
        >
          <NavLink to="/Dashboard">
            <Button variant="contained">Dashboard</Button>
          </NavLink>
          <RWebShare
            data={{
              text: "Crypto Tracker",
              url: "https://crypto-tracker-ashy-ten.vercel.app/",
              title: "Crypto Tracker",
            }}
          >
            <div>
              <Button variant="contained">Share</Button>
            </div>
          </RWebShare>
        </motion.div>
      </div>
      <div className="imageContainer">
        <motion.img
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={phone}
          alt=""
          className="phone"
        />
        <img src={gradient} alt="" className="gradient" />
      </div>
    </main>
  );
};

export default LandingPage;
