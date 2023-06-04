const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-12">
      <p className="text-[#D99904] mb-2 italic"> --- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-4 md:w-3/12 py-4  mx-auto">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
