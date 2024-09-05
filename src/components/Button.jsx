

function Button({children}) {
  return (
    <button className="px-5 py-3 text-[#59547d] border-2 border-[#59547d] rounded-lg font-bold hover:bg-[#59547d] hover:text-white">
      {children}
    </button>
  )
}

export default Button
