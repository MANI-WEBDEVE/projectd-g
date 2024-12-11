import { LayoutGrid } from "@/components/ui/layout-grid";
import { Metadata } from "next";

export default function LayoutGridDemo() {
  return (
    <div className="flex flex-col md:flex-row items-center w-full h-full mt-10 sm:mt-14 ">
      <div className="h-screen py-20 w-full md:w-[60%]">
        <LayoutGrid cards={cards} />
      </div>
      <div className="w-full md:w-1/2 h-[80vh]  flex flex-col justify-center items-start   md:items-center gap-5">
        <h2 className="text-4xl font-bold px-10 uppercase">Ab<span className="text-blue-500 font-thin">out </span>Age<span className="text-blue-500 font-thin">ncy</span></h2>
        <p className="px-10 text-xs md:text-sm md:text-center">
          We are a dynamic, full-service creative agency specializing in a wide
          range of services to help your business thrive. From Logo Creation and
          Graphic Designing to innovative 3D Models, we craft visually stunning
          designs tailored to your brand. Our Digital Marketing strategies,
          Ecommerce solutions, and expert Web Design & Development ensure your
          online presence is impactful and engaging. We also offer cutting-edge
          Video Animation, T-Shirt Designs, and NFT creation for unique digital
          collectibles. Our Product Design and Product Packaging services help
          your products stand out, while our Software Development and Mobile
          Application Development teams create customized solutions to meet your
          business needs. We are dedicated to bringing your vision to life with
          creativity and innovation.
        </p>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      #LogoDesign
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Crafting Unique Logos That Speak Volumes!
      
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      We Create eBooks!
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Transforming Ideas into Digital Pages
      
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-white">
      #YouTubeThumbnails
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Eye-Catching Thumbnails That Get Clicks!
      
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Digital Agency
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Hello Stranger
We are Agy

      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://digitalpencil.tech/wp-content/uploads/slider/cache/e1e50498e5d836ab5b431383622452a9/Expert-Logo-Crreators.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://digitalpencil.tech/wp-content/uploads/slider/cache/7f69ad790ec6d91c7108aae4db16bda9/eBooks-experties.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://digitalpencil.tech/wp-content/uploads/slider/cache/be9462af1aa31ba5fc9934bf02f5dc57/Expert-Thumbnail-Designs.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://digitalpencil.tech/wp-content/uploads/slider/cache/d6b137dee3ea65483e9026b30225417c/Hompage-Image-01.png",
  },
];


export const metadata:Metadata={
  title:"Digital-Pencil✏ | About",
  description:"Digital-Pencil is a creative agency that specializes in creating bespoke digital experiences. From logo design to website development, we provide innovative solutions that drive results. Contact us today to learn more."
}