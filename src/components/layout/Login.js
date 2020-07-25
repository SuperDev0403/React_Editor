import React, {Fragment} from 'react'
import Header from './header/Header'

const Login = () => {
  return (
    <Fragment>
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="cryptorio-forms cryptorio-forms-dark text-center pt-5 pb-5">
            <div className="logo">
              <img
                src="/xxxxx-xxx-xxxxx.svg"
                style={{ marginTop: "35px" }}
                alt="logo"
              />
            </div>
            <h3 className="p-4">Üye Girişi</h3>
            <div className="cryptorio-main-form">
              <form action="" className="text-left">
                <label htmlFor="email">E-Posta Adresi</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-posta adresiniz veya telefon numaranız"
                />
                <label htmlFor="password">Şifre</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Lütfen şifrenizi giriniz"
                />
                <input
                  type="submit"
                  value="Giriş Yap"
                  className="crypt-button-red-full"
                />
              </form>
              <p className="float-left">
                <a href="register.html">Kayıt ol</a>
              </p>
              <p className="float-right">
                <a href="forgot.html">Şifremi Unuttum</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
    </Fragment>
  );
}

export default Login;
