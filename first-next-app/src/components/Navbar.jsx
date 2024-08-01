"use client"; // client component, not server rendered
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import LetterAvatars from "./LetterAvatar";
import { useMainContext } from "@/stores/mainStore";

// copied from previous NavBar.jsx component, modified for Next.js
// save as src/components/NavBar.jsx
function NavBar() {
  const path = usePathname(); // hook to check current path
  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: "#09193b", color: "#14bbe5" }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={"space-between"}
      ></Box>
      <ul className="menu" sx={{ flex: 6 }}>
        {/* Next.js Link components use href instead of to prop */}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            href="/dash"
            className={path.startsWith("/dash") ? "active" : null}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={path.startsWith("/about") ? "active" : null}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={path.startsWith("/posts") ? "active" : null}
          >
            Posts
          </Link>
        </li>
      </ul>
      <Box display={"flex"} alignItems={"center"} px={"10px"}>
        <LetterAvatars name={""} />
      </Box>
    </nav>
  );
}

export default NavBar;
