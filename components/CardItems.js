import cardStyles from "../styles/CardItem.module.css";

const CardItems = ({ user, cvvNumber, cardPAN, expireDate }) => (
  <>
    <div className={cardStyles.cardContainer}>
      <img
        className={cardStyles.cardLogo}
        src="/images/Logo.png"
        alt="Card logo"
      />
      <h1 className={cardStyles.cardName}>Vula</h1>
      <img
        className={cardStyles.mastercard}
        src="https://image.flaticon.com/icons/svg/196/196561.svg"
        alt="Mastercard"
      />
      <div className={cardStyles.cardNumber}>
        <p>{cardPAN}</p>
        <br />
        <p>CVV: {cvvNumber}</p>
        <p>EXP: {expireDate}</p>
      </div>
      <img
        className={cardStyles.cardNetwork}
        src="https://image.flaticon.com/icons/svg/759/759126.svg"
        alt="Networck"
      />
    </div>
  </>
);

export default CardItems;
