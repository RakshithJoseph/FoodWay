import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
        <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.text}>
            +91 123 456 789 <br />
            +91 454 552 125
          </p>
          <h1 className={styles.title}>OWNED BY:</h1>
          <p className={styles.text}>
            Dhruvil Thummar
            <br /> Rakshith Joseph
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Kamrej,
            <br /> Surat, 394150 <br />Gujarat
            
          </p>
          <p className={styles.text}>
            Udhna,
            <br />Surat, 394152
            <br /> Gujarat
          </p>
          <p className={styles.text}>
            KR Market
            <br /> Bengaluru, 562114
            <br /> Karnataka
          </p>
          <p className={styles.text}>
            Andheri
            <br /> Mumbai, 850445
            <br /> Mahrashtra
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
