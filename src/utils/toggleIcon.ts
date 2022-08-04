export const toggleIcon = (
  setToggledIcon?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setToggledIcon(true);

  setTimeout(() => {
    setToggledIcon(false);
  }, 800);
};
