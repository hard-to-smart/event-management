import { bankCards } from "../../utils/BankCardImages"

const BankCards = () => {
  return (
    //multiple bank cards to display on checkout i.e. user bookings page
    <div className="flex justify-center">
      {bankCards.map((src) => (
        <div className="w-10  m-2 ">
          <img className="w-full h-[30px] object-contain" src={src} />
        </div>
      ))}
    </div>
  );
};

export default BankCards;
