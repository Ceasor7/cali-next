"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function ProgramBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const formattedSegment =
            segment.charAt(0).toUpperCase() + segment.slice(1);

          if (segment === "programs" && !isLast) {
            return (
              <React.Fragment key={segment}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/#programs">
                    {formattedSegment}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={segment}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>
                    {formattedSegment}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
