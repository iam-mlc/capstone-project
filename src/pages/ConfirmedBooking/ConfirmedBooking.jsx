import styles from "./ConfirmedBooking.module.css";

const ConfirmedBooking = () => {
  return (
    <main>
      <section className={styles.confirmed}>
        <p>Your table has been reserved. We look forward to receiving you ! </p>
      </section>
    </main>
  );
};

export default ConfirmedBooking;
