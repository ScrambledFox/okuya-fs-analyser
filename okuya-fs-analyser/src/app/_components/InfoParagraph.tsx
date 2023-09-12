import React from "react";

export default function InfoParagraph({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <div className="absolute -translate-x-24 translate-y-4">{icon}</div>

      <div id="introduction" className="m-auto mb-4 max-w-xl">
        <div>
          <h2 className="uppercase font-bold text-lg ">{title}</h2>
          <span className="absolute w-32 border-b-2 border-b-white" />
        </div>
        <div className="pt-2 text-justify">{children}</div>
      </div>
    </div>
  );
}
