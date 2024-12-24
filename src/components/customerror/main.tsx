import React from 'react';
import { Link } from 'gatsby';

export default function CustomPage() {
  return (
    <main className="error_page">
      <section className="content_404">
        <div className="container">
          <div className="wrapper_404">
            <h1 className="blue_heading">
              This page seems to have slipped through a time portal.
            </h1>
            <p>
              Sorry, we couldn't find the page you're looking for. The page may
              have been moved or deleted, please check the URL and try again.
            </p>
            <Link to="/" className="btn blue_btn">
              Go to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="gradient_divider"></section>
    </main>
  );
}
