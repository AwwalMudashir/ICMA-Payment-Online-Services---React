import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

function Card({
  title,
  description,
  linkText = "Click Here",
  iconColorClass = "text-gray-600",
  iconBgClass = "bg-gray-100",
  borderColorClass = "border-b-gray-400",
  iconSizeClass = "h-10 w-10",
  hoverClass = "hover:bg-gray-400",
  hoverIconBgClass = "group-hover:bg-white",
  hoverLinkTextClass = "group-hover:text-white"
}) {
  return (
    <div
      className={`group bg-white p-6 rounded-xl border-b-3 ${borderColorClass} flex flex-col items-center text-center space-y-1 ${hoverClass} hover:text-white`}
    >
      <div className={`${iconBgClass} ${hoverIconBgClass} p-3 rounded-lg flex items-center justify-center w-fit hover:bg-white`}>        
        <ChatBubbleBottomCenterIcon
          className={`${iconSizeClass} ${iconColorClass}`}
        />
      </div>
      <h1 className="text-xl font-semibold mt-4">{title}</h1>
      <p>{description}</p>
      <a href="#" className={`${iconColorClass} ${hoverLinkTextClass}`}>{linkText} ➔</a>
    </div>
  );
}

export default Card;
