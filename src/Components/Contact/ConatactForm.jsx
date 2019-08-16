import React from 'react'

const Form = () => {
    return (
        <main className="form-main">
            <section className="form-bg">
                <h1>Contact Us</h1>'
          <form className="needs-validation form-container" novalidate>
                    <div className="input-wrapper">
                        <div className="input-field">
                            <label for="validationCustom01">Name</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="Name" required />
                        </div>
                        <div className="input-field">
                            <label for="validationCustom03">Email</label>
                            <input type="email" class="form-control" id="validationCustom03" placeholder="Email" required />
                        </div>
                        <div>
                            <textarea  required></textarea>
                        </div>
                        <button className="btn btn-primary purple" type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </main>
    )
}
export default Form