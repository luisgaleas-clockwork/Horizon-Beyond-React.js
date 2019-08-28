import React from 'react'
import '../bootstrapValidation'

const Form = () => {
    return (
        <main className="form-main">
            <section className="form-bg">
                <h1>Contact Us</h1>'
                <form className="needs-validation form-container" noValidate>
                    <div className="form-row">
                        <div className=" md-form">
                            <label htmlFor="validationCustom012">Name</label>
                            <input type="text" className="form-control" id="validationCustom012" placeholder="Name"
                                required />
                            <div className="valid-feedback">
                                Looks good!
      </div>
                        </div>
                        <div className=" md-form">
                            <label htmlFor="validationCustom022">Email</label>
                            <input type="email" className="form-control" id="validationCustom022" placeholder="Email" required />
                            <div className="valid-feedback">
                                Looks good!
      </div>
                        </div>
                        <textarea></textarea>
                    </div>
                    <button className="btn btn-primary  btn-rounded form-btn" type="submit">Submit form</button>
                </form>
            </section>
        </main>
    )
}
export default Form