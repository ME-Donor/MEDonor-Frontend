import './wth.css'

export const Testimonials = (props) => {
    return (
      <div id='testimonials'>
        <div className='container'>
          <div className='section-title text-center about'>
            <h2>FAQ's</h2>
          </div>
          <div className='row'>
        <div className={"faqq"}>       
          <div className="ccontainer">
          
              <div className="faq-drawer">
                <input className="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer">Who can donate? </label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="fqqans">
                    Individuals or organizations with unused or unwanted medicines can donate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-drawer">
                <input className="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-2">Can I donate expired medications?</label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="fqqans">
                    We do not accept expired or opened medications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-drawer">
                <input className="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-3">Do you accept all medications?</label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="fqqans">
                    We do not accept expired or opened medications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-drawer">
                <input className="faq-drawer__trigger" id="faq-drawer-4" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-4">What does unopened/sealed mean?</label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="fqqans">
                    Donated medicine must have a tamper-evident seal around the medication. Bubble packs, blister packs, and bingo cards even if they only have a few pills left are okay. Outer packaging can be opened if there is an inner seal, such as a foil around inhalation solutions, even though the box was opened.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faq-drawer">
                <input className="faq-drawer__trigger" id="faq-drawer-5" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-5">How does shipping work?</label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="fqqans">
                    NGO's contact the donors who've put up medicines ofr donation, they then pick up the medicines from the donor's place or the donor can drop them at the NGO, whichever suits both.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
          </div> 
  
  
          </div>
        </div>
      </div>
    )
  }
  