import { lazy, Suspense } from "react";

const VideoPlaySvg = lazy(() => import("../../assets/svgs/VideoPlay"));
import Spinner from "../../ui/Spinner";
import chart from "../../assets/imgs/chart.png";
import customers from "../../assets/imgs/customers.png";

export default function VideoImage() {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="hidden xl:flex flex-col gap-2 items-center relative">
        <p className="font-medium text-[1.4rem] text-[var(--color-text-light)]">
          See how we create an autonomous ai agent
        </p>
        <VideoPlaySvg />
        <img
          src={chart}
          alt="chart"
          className="h-[21rem] w-[21rem] absolute left-[-5rem] top-[40%] shadow-lg shadow-black-500/20 hidden"
          loading="lazy"
        />
        <img
          src={customers}
          alt="customer-data"
          className="h-[21rem] w-[21rem] absolute right-[-5rem] top-[20%] shadow-lg shadow-black-500/20 hidden"
          loading="lazy"
        />
      </div>
    </Suspense>
  );
}
