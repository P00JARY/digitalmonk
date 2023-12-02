import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowDownToLine,
  CheckCircle,
  Headphones,
  RefreshCw,
  Shield,
} from "lucide-react";

import Link from "next/link";
const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "Get your digital assets immediately upon purchase.",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description: "Assured high-quality standards for all digital assets.",
  },
  {
    name: "Lifetime Updates",
    icon: RefreshCw,
    description: "Access free updates and improvements for a lifetime.",
  },
  {
    name: "Secure Transactions",
    icon: Shield,
    description: "Ensured security and privacy in all transactions.",
  },
  {
    name: "24/7 Support",
    icon: Headphones,
    description: "Get assistance at any time for any concerns or queries.",
  },
  // You can continue adding more perks here...
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto flex flex-col text-center items-center mmx-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for{" "}
            <span className="text-blue-600"> digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalMonk - Your Premier Destination for Digital Goods!
            Discover a world of endless possibilities with our diverse range of
            digital products. Whether you're an entrepreneur, a creator, or
            someone looking for unique digital experiences, we've got you
            covered.
          </p>
          <div className="flex flex-col  sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              {" "}
              Browse for Trending
            </Link>
            <Button variant={"ghost"}>Our Quality Promise &rarr;</Button>
          </div>
        </div>

        {/* TODO:list products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50 py-2">
        <MaxWidthWrapper className="py-20">
          <div className="grid  grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
