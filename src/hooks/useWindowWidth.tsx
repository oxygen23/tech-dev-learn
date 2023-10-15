// import { useState, useEffect } from "react";

// const useWindowWidth = (): number => {
//   const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//   }, []);

//   useEffect(() => {
//     function handleResize() {
//       setWindowWidth(window.innerWidth);
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowWidth;
// };

// export default useWindowWidth;
