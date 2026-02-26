// import { TbChevronRight } from "react-icons/tb";
// import { Link } from "react-router-dom";

import { Link, useLocation } from "react-router-dom";
import ArrowIcon from "./ArrowIcon";

interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: string;
  href?: string;
}

const ServiceCard = ({
  title,
  description,
  imgSrc,
  href = "#",
}: ServiceCardProps) => {
  const { pathname } = useLocation();
  return (
    <div className="group border border-border bg-white p-6 rounded-none rounded-tr-xl flex flex-col gap-2 max-w-[350px]">
      {/* Icon */}
      <img src={imgSrc} alt={title} className="mb-4 w-16 h-16"></img>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
      <hr />
      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      {/* CTA */}
      {/* <Link
        to={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:underline transition"
      >
        <span className="w-5 h-5 flex items-center justify-center rounded-full border border-orange-500 bg-orange-500 text-white">
          <TbChevronRight />
        </span>
        Learn more
      </Link> */}
      {pathname === "/services/other-services" && (
        <Link to="/contact" className="flex gap-1 justify-start items-center">
          <ArrowIcon/>
          <span className="hover:underline transition-colors duration-300 hover:text-orange-400">Contact Us</span>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
