const Paragraph = (props) => {
  return (
    <p
      className={
        props.className
          ? `${props.className} text-sm sm:text-base md:text-lg lg:text-2xl pb-4 md:pb-6 lg:pb-14 text-center px-10 sm:px-20 lg:px-40 xl:px-44`
          : "text-sm sm:text-base md:text-lg lg:text-2xl pb-4 md:pb-6 lg:pb-14 text-center px-10 sm:px-20 lg:px-40 xl:px-44"
      }
      style={{ color: "rgba(255, 255, 255, 0.5)" }}
    >
      {props.children}
    </p>
  );
};

export default Paragraph;
