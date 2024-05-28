import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Box } from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";
import { profiles } from "../data/data";
import BigProfile from "./BigProfile";

const CodingProfiles = () => {
  return (
    <Box id="profiles" className="h-auto md:h-[80vh] bg-blue-100">
      <Box className="text-4xl text-white bg-black p-4 gradient-text font-bold ">
        Profiles
      </Box>
      <Box className="w-[100%] h-auto bg-blue-100 flex items-center justify-center py-4 md:h-[100%]">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div
            className="carousel-inner"
            
          >
            {profiles.map((m, i) => (
              <div
                className={`carousel-item ${i === 0 ? "active" : ""}`}
                key={m.name}
              >
                <div className="block md:hidden">
                  <ProfileCard
                    name={m.name}
                    image={m.image}
                    highestrated={m.highestrated}
                    problemssolved={m.problemssolved}
                    profilelink={m.profilelink}
                  />
                </div>
                <div className="hidden md:block">
                  <BigProfile
                    name={m.name}
                    image={m.image}
                    highestrated={m.highestrated}
                    problemssolved={m.problemssolved}
                    profilelink={m.profilelink}
                  />
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
              style={{ color: { md: "black" } }}
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{ color: { md: "black" } }}
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Box>
    </Box>
  );
};

export default CodingProfiles;
