export const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className || ''}`}>
      {children}
    </div>
  );
};
