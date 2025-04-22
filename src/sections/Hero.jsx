// import { Leva } from "leva";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
// import { PerspectiveCamera } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";

// import Cube from "../components/Cube.jsx";
// import Rings from "../components/Rings.jsx";
// import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
// import Target from "../components/Target.jsx";
// import CanvasLoader from "../components/CanvasLoader.jsx";
// import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
// import HackerRoom from "/src/components/HackerRoom.jsx";

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      className="bg-[url(/assets/back-g.jpg)] bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col relative"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        {/* <h1 className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans pt-6">
          Hey, I am George Jere{" "}
          <span className="text-yellow-500 font-semibold">
            <Typewriter
              words={["Eat", "Sleep", "Breathe"]}
              loop={5}
              cursor={true}
              cursorStyle=""
              typeSpeed={60}
              delaySpeed={50}
              deleteSpeed={1000}
            />
          </span>{" "}
          React!
        </h1> */}
        <p className="text-white xl:text-8xl md:text-7xl sm:text-6xl text-5xl text-center font-generalsans font-black !leading-normal pt-20">
          Hey, I am George Jere.
        </p>
        <h3 className="text-white text-center xl:text-5xl md:text-4xl sm:text-3xl text-2xl">
          <span className="text-white-700 font-semibold">
            <Typewriter
              words={["Code.", "Rest.", "Repeat!"]}
              loop={false}
              cursor={true}
              cursorStyle=""
              typeSpeed={60}
              delaySpeed={50}
              deleteSpeed={1000}
            />
          </span>
        </h3>
      </div>

      {/* {newFunction()} */}

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );

  //   function newFunction() {
  //     return <div className="w-full h-full absolute inset-0">
  //       <Canvas className="w-full h-full">
  //         <Suspense fallback={<CanvasLoader />}>
  //           {/* To hide controller */}
  //           <Leva hidden />
  //           <PerspectiveCamera makeDefault position={[0, 0, 30]} />

  //           {/* <HeroCamera isMobile={isMobile}>
  //           <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
  //         </HeroCamera> */}

  //           <group>
  //             <Target position={sizes.targetPosition} />
  //             <ReactLogo position={sizes.reactLogoPosition} />
  //             <Rings position={sizes.ringPosition} />
  //             <Cube position={sizes.cubePosition} />
  //           </group>

  //           <ambientLight intensity={1} />
  //           <directionalLight position={[10, 10, 10]} intensity={0.5} />
  //         </Suspense>
  //       </Canvas>
  //     </div>;
  //   }
};

export default Hero;
