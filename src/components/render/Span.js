export const Span = ({ className, style, id, children }) => {
  return (
    <span id={id} className={className} style={style}>
      {children}
    </span>
  );
};
