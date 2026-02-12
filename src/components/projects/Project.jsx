import { useEffect, useState } from "react";

export const Project = () => {
  return (
    <>
      <section>
        <div>Project #</div>
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
