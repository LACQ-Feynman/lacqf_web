export const BottomGradient = () => {
  return (
    <>
      <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-neutral-900 to-transparent h-px" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-neutral-900 to-transparent h-px" />
    </>
  );
};
