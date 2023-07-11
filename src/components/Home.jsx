import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

const Home = () => {

  const [memberName, setMemberName] = useState('');

  const homePage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      // console.log(data);
      setMemberName(data.name);

    } catch (err) {
      console.log(err);

    }
  };

  useEffect(() => {
    homePage();
  }, []);

  return (
    <>
      <Carousel />
      {/* <div className="container text-center mt-5">
        <p>Welcome</p>
        <h2>{memberName}</h2>
        <h3 className='mt-5'>Fitness Club</h3>
      </div> */}

      <div className='mb-5'>


        <section className="home-about spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-none d-lg-block">
                <div className="home__about__pic">

                  <div className="home__about__pic__item large-item set-bg" ><img src="img/about/about-1.jpg" alt="" /></div>
                  <div className="home__about__pic__item">
                    <div className="home__about__pic__item__inner set-bg" ><img src="img/about/about-2.jpg" alt="" /></div>
                    <div className="home__about__pic__item__inner set-bg" ><img src="img/about/about-3.jpg" alt="" /></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home__about__text">
                  <div className="section-title">
                    <img src="img/icon.png" alt="" />

                    <h2>Welcome {memberName}</h2>
                  </div>

                  <span>“What hurts today makes you stronger tomorrow.”</span>

                  <p>We are offering internationally certified 200 Hour Yoga Teacher Training in Rishikesh and 300
                    hour yoga teacher training in Rishikesh, India - Join us to have such life-transforming
                    experience in The world capital of Yoga in Rishikesh.</p>
                  <p className="para-2">Zogin is a great place for those who are in search of the ancient practice and
                    true essence of yoga, meditation, health, peace and learning the art of creating a className to
                    teach safely. We are passionate about adjustments and mainly focus on the alignment of the
                    asanas.</p>
                  <Link to="/about" className="primary-btn text-decoration-none">MORE ABOUT US</Link>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <img src="img/icon.png" alt="" />
                  <h2>Enjoy All Aspects Of Yoga</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="services__list">
              <div className="row">
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-1.png" alt="" />
                    <h5>Asana</h5>
                    <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience
                      india!</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-2.png" alt="" />
                    <h5>Meditation</h5>
                    <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience
                      india!</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-3.png" alt="" />
                    <h5>Mudra</h5>
                    <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience
                      india!</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-4.png" alt="" />
                    <h5>Bandhas</h5>
                    <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience
                      india!</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-5.png" alt="" />
                    <h5>Philosophy</h5>
                    <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience
                      india!</p>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-6">
                  <div className="services__item">
                    <img src="img/services/services-6.png" alt="" />
                    <h5>Pranayama</h5>
                    <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience
                      india!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="chooseus spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="chooseus__text">
                  <h2>Why Choose Us</h2>
                  <p>We are offering internationally certified 200 Hour Yoga Teacher Training in Rishikesh and 300
                    hour yoga teacher training in Rishikesh, India - Join us to have such life-transforming
                    experience in The world capital of Yoga in Rishikesh.</p>
                </div>
                <div className="chooseus__item">
                  <div className="chooseus__item__icon">
                    <img src="img/chooseus/choose-1.png" alt="" />
                  </div>
                  <div className="chooseus__item__text">
                    <h2 className="choose-counter">2146</h2>
                    <p>Students</p>
                  </div>
                </div>
                <div className="chooseus__item">
                  <div className="chooseus__item__icon">
                    <img src="img/chooseus/choose-2.png" alt="" />
                  </div>
                  <div className="chooseus__item__text">
                    <h2 className="choose-counter">15</h2>
                    <p>Years Of Experience</p>
                  </div>
                </div>
                <div className="chooseus__item">
                  <div className="chooseus__item__icon">
                    <img src="img/chooseus/choose-3.png" alt="" />
                  </div>
                  <div className="chooseus__item__text">
                    <h2 className="choose-counter">48</h2>
                    <p>Branches</p>
                  </div>
                </div>
                <div className="chooseus__item">
                  <div className="chooseus__item__icon">
                    <img src="img/chooseus/choose-4.png" alt="" />
                  </div>
                  <div className="chooseus__item__text">
                    <h2 className="choose-counter">234</h2>
                    <p>Expert Staffs</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="chooseus__pic">
                  <img src="img/chooseus/choose-pic.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>


        


      </div>
    </>
  );
}


export default Home;