function SectionTag({children}) {
  return (
    <div className="flex w-full ">
      <div className="py-1 px-5 rounded-xl bg-[#2dc6b3] w-auto">
        <h5 className="text-white text-center text-md">{children}</h5>
      </div>
    </div>
  );
}

export default SectionTag;
