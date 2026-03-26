interface TextServiceProps {
  title: string
  description: string
}

const TextService = ({ title, description }: TextServiceProps) => {
  return (
    <div className="max-w-2/3 mx-auto lg:mx-0 lg:max-w-none">
      <h4 className="font-inter font-black text-[18px] text-white lg:whitespace-nowrap text-center  lg:text-left mb-4 lg:mb-6">
        {title}
      </h4>
      <p className="font-inter font-extralight text-sm text-[#cccccc] text-center lg:text-left">
        {description}
      </p>
    </div>
  )
}

export default TextService
