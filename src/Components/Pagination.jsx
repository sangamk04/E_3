import { useRef } from "react";
import { useState } from "react";
import PageCell from "./PageCell";
import styles from "./Pagination.module.css";

export const Pagination = ({ total, selected, onPageChange }) => {
  const [totalBox] = useState(new Array(total).fill(0));

  const pageRef = useRef([]);


  const handlePrevpage = () => {
    onPageChange(-1)
  }

  const handleNextpage = () => {
    onPageChange(+1)
  }

  return (
    <div className="pageContainer">
      <div className={styles.box}>
        <button data-testid="prev-btn" disabled={selected==1} onClick={handlePrevpage}>prev</button>
        {totalBox &&
          totalBox.map((item, index) => {
            return (
              <PageCell
                key={index}
                total={10}
                ind={index+1}
               selected={selected}
              >
                {index}
              </PageCell>
            );
          })}
        <button data-testid="next-btn" disabled={selected==total} onClick={handleNextpage}>next</button>
      </div>
    </div>
  );
};
