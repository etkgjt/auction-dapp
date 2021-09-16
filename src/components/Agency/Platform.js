import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Platform = () => {
  return (
    <section className="platform-connect ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2>Interact With Your Users On Every Single Platform</h2>
          </div>

          <div className="col-lg-3 col-md-6">
            <Link to="/#">
              <a className="box">
                <img
                  src={require('@src/assets/images/mailchimp.png').default}
                  alt="mailchimp"
                />

                <h3>Mail Chimp</h3>
                <span>Send Mail</span>

                <i className="icofont-bubble-right"></i>
              </a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6">
            <Link to="/#">
              <a className="box">
                <img
                  src={require('@src/assets/images/slack.png').default}
                  alt="slack"
                />

                <h3>Slack</h3>
                <span>Messaging</span>

                <i className="icofont-bubble-right"></i>
              </a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6">
            <Link to="/#">
              <a className="box">
                <img
                  src={require('@src/assets/images/twitter.png').default}
                  alt="twitter"
                />

                <h3>Twitter</h3>
                <span>Twitter Feed</span>

                <i className="icofont-bubble-right"></i>
              </a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6">
            <Link to="/#">
              <a className="box">
                <img
                  src={require('@src/assets/images/instagram.png').default}
                  alt="instagram"
                />

                <h3>Instagram</h3>
                <span>News Feed</span>

                <i className="icofont-bubble-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
