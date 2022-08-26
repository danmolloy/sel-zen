import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <h1 className="main-h1">Contact</h1>
      <form className="contact-form">
        <div className="form-input-label-div">
          <label htmlFor="Name">Name</label>
          <input className="form-input" />
        </div>
        <div className="form-input-label-div">
          <label htmlFor="Name">Email</label>
          <input className="form-input" />
        </div>
        <div className="form-input-label-div">
          <label htmlFor="Name">Message</label>
          <textarea className="form-text" />
        </div>
        <button className="form-submit-btn">
          Submit
        </button>
      </form>
      <div className="self-center my-16">
        <iframe className="w-72 h-72 sm:w-96 sm:h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19893.772141396432!2d-0.029972199999999997!3d51.444908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603eafd20c06d%3A0x20c68a09a037e3a8!2sSt.%20Hilda&#39;s%20Crofton%20Park!5e0!3m2!1sen!2suk!4v1658163826867!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Layout>
  )
}