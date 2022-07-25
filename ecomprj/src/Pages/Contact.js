export default function Contact() {
    return ( <section id="contact">
    <div className="container">
      <h2 className="contact-title">Contact Us</h2>
      <p>
        If you have any questions regarding your order please enter your
        information below and we will get back to you 1-2 business days.
      </p>
      <form>
        <input
          type="text"
          id="placehlder"
          name="firstname"
          placeholder="First Name"
        />
        <input
          type="text"
          id="placehder"
          name="lastname"
          placeholder="Last Name"
        />
        <input
          type="text"
          id="plcehlder"
          name="email"
          placeholder="E-Mail"
        />
        <textarea
          id="placehldr"
          name="subject"
          placeholder="Comments and or Questions"
        ></textarea>

        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  </section>)
  }