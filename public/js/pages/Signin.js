import React from 'react'

const Signin = () => {
  return (
    <div class="form-container">
      <div class="form-container-section">
        <h4>Sign in to your account</h4>
        <form>
          <fieldset>
            <div class="form-group">
              <input
                type="text"
                id="email"
                class="form-control"
                ngControl="email"
                placeholder="Email Address"
                required
              />
              <div>
                <div
                  class="text-danger"
                >Please enter a valid email address
                </div>
              </div>
            </div>
            <div class="form-group">
              <input
                type="password"
                id="password"
                class="form-control"
                ngControl="password"
                placeholder="Password"
              />
              <div
                class="text-danger"
              >Please enter your password
              </div>
            </div>
          </fieldset>
          <button class="btn btn-primary login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Signin
