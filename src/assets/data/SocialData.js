import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const iconStyles = {
  width: "50px !important",
  height: "50px !important",
  margin: "15px !important",
  color: "#283E44",
};

export const socialData = [
  {
    id: 1,
    icon: <GitHubIcon sx={iconStyles} />,
    name: "Github",
    url: "https://github.com/amarnathreddy0201",
  },
  {
    id: 2,
    icon: <LinkedInIcon sx={iconStyles} />,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/amarnath-reddy-surapureddy-ex-employee-of-kalvet-tech-llp-6836881b7/",
  },
  // {
  //   id: 3,
  //   icon: <FacebookIcon sx={iconStyles} />,
  //   name: "Facebook",
  //   url: "https://www.facebook.com/profile.php?id=100004873478538",
  // },
  // {
  //   id: 4,
  //   icon: <InstagramIcon sx={iconStyles} />,
  //   name: "Instagram",
  //   url: "https://www.instagram.com/ysam020/",
  // },
];
