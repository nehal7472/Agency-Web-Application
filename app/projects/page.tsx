import React from "react";
import PageHeader from "@/components/page-header";
import ProjectSection from "@/components/projects/project-section";



export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="All Projects"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "All Projects" }]}
      />
      <ProjectSection />
    </>
  );
}
