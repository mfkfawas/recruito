import "./App.css";
import Header from "./features/header";
// const VideoPlaySvg = lazy(() => import("./assets/svgs/video-play"));
// import CanImg from "./assets/imgs/canidate-sourcing-graph.png";

function App() {
  // return (
  //   <>
  //     <h2 className="text-3xl font-bold underline text-red-500">test</h2>
  //     <div className="grid place-items-center">
  //       <Suspense fallback={<h1 className="text-9xl">Loading....</h1>}>
  //         <div className="relative">
  //           <VideoPlaySvg />
  //           <img
  //             src={CanImg}
  //             alt="candidate-sourcing-graph"
  //             loading="lazy"
  //             className="absolute top-1/2 -translate-y-1/2 left-0 w-[21rem] h-[21rem]"
  //           />
  //         </div>
  //       </Suspense>
  //     </div>
  //   </>
  // );

  return <Header />;
}

export default App;
