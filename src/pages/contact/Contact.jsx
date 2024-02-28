import './contact.scss'

const Contact = () => {
  return (
    <div className='Contact'> 
      <div className="contact-us">
        <div className="container">
            <div className="header-left">
              <div className="heading">Contact Us</div>
              <div className="text-wrapped">
                Email, Call or complete the form to learn how Frint can help you
                find Internships.
              </div>
            </div>
        
            <div class="box">
              <div class="header-right">Get in Touch</div>
              <div class="text-right">You can reach us anytime</div>
                <div className="form">
                  <div className="form-group">
                    <div class="form-grp-1">
                      <div class="form-input-1">     
                        <input type="text" id="firstName" placeholder="First Name" />
                      </div>
                      <div class="form-input-2">
                        <input type="text" id="lastName"  placeholder="Last Name" />
                      </div>
                    </div>
                  </div>
                  <div class="input-email">
                    <input type="email" id="email" placeholder="Email" />
                  </div>
                  <div class="input-number">            
                    <input type="number" id="phoneNumber" placeholder="Phone Number" />
                  </div>
                  <div class="input-msg">
                    <input type ="textarea" id="message"  placeholder="How can we help?"></input>
                  </div>
                </div>
              <button type="submit" class="button">Submit</button>                
            </div>       
        </div>
      </div>
    </div>
  )
}

export default Contact