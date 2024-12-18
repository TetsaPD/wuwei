import { type ReactNode } from "react";
const Yogapage = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <p>No Yoga Type Selected</p>
        {children}
      </div>
    </>
  );
};

export default Yogapage;
