import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Project = () => {
  const { projectId } = useParams();

  return (
    <>
      <section>
        <div>Project # {projectId}</div>
        <div>Client:</div>
        <div>Status:</div>
        <div>Session Date:</div>
      </section>
      <section>
        <div>image</div>
      </section>
      <section>
        <button>Save Changes</button>
        <button>Delete Project</button>
      </section>
    </>
  );
};
