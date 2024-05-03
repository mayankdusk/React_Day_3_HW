import "./bodyPart.css";

const bodyPart = () => {
    return (
      <section>
        <img src="../../../src/assets/Wellness.jpg" alt="wellness pic" />
        <article className="card">
          <h1>Think Health. Think Message.</h1>
          <p>
            We are open 9am to 6pm; Monday through Sunday.If you like to
            schedule an appointment
          </p>
          <p>with us, please call us at 987-654-3210 today!</p>
          <button>LEARN MORE ABOUT US</button>
          <button>CONTACT US TODAY</button>
        </article>
        <article className="second_card">
          <p id="fst_p">
            Are you looking for a professional, registered massage theripiest?
            Sample Massage Therapy for 4 registered Massaged Theraphiest who can
            provide clinical massage.Sample Massage Therapy for 4 registered
            Massaged Theraphiest who can provide clinical massage.
          </p>
          <br />
          <p className="snd_p">
            We are commited to your long term health and well-being. Our
            multi-deciplinery clinic provides a balanced approach to a healthy
            lifestyle. Enhance your health and improve your performance with our
            treatments.
          </p>
          <p className="snd_p">
            We welcome you to come expore all the benefits you'll enjoy as one
            of our valued guests. Our professional staff is commitedto offering
            the best massage tharapy in Mainland.of our valued guests. Our
            professional staff is commitedto of massage tharapy in Mainland.
          </p>
          <hr />
          <h2>Family Wellness Massage Therapy</h2>
          <p className="no">9876 Main Street, Suite 123, Mainland, ML12345</p>
          <p className="hjk">Phone: 987-654-3210</p>
        </article>
      </section>
    );
};

export default bodyPart;