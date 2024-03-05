import React, { useState } from 'react';
import '../Private/Style/modal.css'; // Import your modal.css file

function ContactForm() {
  const [formData, setFormData] = useState({
    myname: '',
    myemail: '',
    mycontact: '',
    services: 'Select Services',
    messagearea: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="modal-body">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <input
              className="form-control message-input-m"
              type="text"
              maxLength="40"
              name="myname"
              id="name"
              placeholder="Name*"
              required
              value={formData.myname}
              onChange={handleChange}
            />
            <input
              className="form-control message-input-m"
              type="email"
              maxLength="70"
              name="myemail"
              id="email"
              placeholder="E-mail*"
              required
              value={formData.myemail}
              onChange={handleChange}
            />
            <input
              className="form-control message-input-m"
              type="number"
              maxLength="10"
              minLength="10"
              name="mycontact"
              id="contact"
              placeholder="Contact No.*"
              required
              value={formData.mycontact}
              onChange={handleChange}
            />
            <select
              name="services"
              className="custom-select message-input-m"
              value={formData.services}
              onChange={handleChange}
            >
              <option value="Select Services" disabled>Select Services</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Application">Mobile Application</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Website Audit & Consultancy">Website Audit & Consultancy</option>
            </select>
            <textarea
              className="form-control message-input-m message"
              name="messagearea"
              id="message"
              maxLength="3200"
              rows="5"
              placeholder="Message"
              value={formData.messagearea}
              onChange={handleChange}
            ></textarea>
            <button className="modal-button btn-block" type="submit" name="sendschedule">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
