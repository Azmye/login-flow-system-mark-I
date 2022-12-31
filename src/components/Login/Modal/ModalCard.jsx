import { IoCloseSharp } from 'react-icons/io5';
const ModalCard = ({ onClick, infoDetails }) => {
  return (
    <div className="absolute w-1/6">
      <div className="bg-slate-500 text-white rounded-lg overflow-hidden">
        <div className="bg-slate-400 flex py-3 px-3 items-center justify-between">
          <h1 className="font-semibold text-xl">Info</h1>
          <button onClick={onClick}>
            <IoCloseSharp size={32} />
          </button>
        </div>
        <div className="px-3 py-3">{infoDetails}</div>
      </div>
    </div>
  );
};

export default ModalCard;
