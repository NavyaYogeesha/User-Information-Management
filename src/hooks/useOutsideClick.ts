import { useState, useEffect, useRef } from "react";

const useComponentVisible = (initialIsVisible: boolean) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible); // State to show/hide component
  const ref: any = useRef(null);

  /**
   * @function handleHideDropdown
   * @description Function to handle the key strokes and hide the component
   * @param event Keyboard event to check the key pressed
   * @author navya.y
   */
  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  /**
   * @function handleClickOutside
   * @description Function to handle the click and hide the component accordingly
   * @param event Mouse event to check the target of the click
   * @author navya.y
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    // Event listner to detect click and keypress
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);

    // Remove the event listener on component destroy
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};

export default useComponentVisible;
