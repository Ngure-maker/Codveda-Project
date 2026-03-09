import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="landing">
      <section className="hero hero-modern">
        <div className="hero-content">
          <span className="badge">Turn plans into progress</span>
          <h1>Your day, beautifully organized.</h1>
          <p>
            Capture what matters, keep your momentum, and enjoy the calm that comes from knowing exactly what to do
            next.
          </p>
          <div className="form-actions">
            <Link className="cta-btn" to="/register">
              Start fresh
            </Link>
            <Link className="cta-btn secondary-link" to="/login">
              Continue
            </Link>
            <Link className="cta-btn secondary-link" to="/about">
              See the story
            </Link>
          </div>
          <div className="hero-meta">
            <div className="mini-stat">
              <strong>Private</strong>
              <span>Your space</span>
            </div>
            <div className="mini-stat">
              <strong>Simple</strong>
              <span>Clear actions</span>
            </div>
            <div className="mini-stat">
              <strong>Focused</strong>
              <span>Less noise</span>
            </div>
          </div>
        </div>

        <div className="hero-panel" aria-hidden="true">
          <div className="mock-card">
            <div className="mock-top">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="mock-body">
              <div className="mock-line w-80" />
              <div className="mock-line w-60" />
              <div className="mock-grid">
                <div className="mock-tile" />
                <div className="mock-tile" />
                <div className="mock-tile" />
              </div>
              <div className="mock-line w-70" />
              <div className="mock-line w-50" />
            </div>
          </div>
        </div>
      </section>

      <section className="card section">
        <div className="section-head">
          <h2>Small steps. Big wins.</h2>
          <p>Everything you need to keep your ideas moving — from “I should” to “It’s done.”</p>
        </div>
        <div className="feature-grid">
          <div className="feature">
            <h3>A clean space to think</h3>
            <p>One dashboard that makes your next move obvious.</p>
          </div>
          <div className="feature">
            <h3>Your tasks stay yours</h3>
            <p>Keep your work private, organized, and tied to your account.</p>
          </div>
          <div className="feature">
            <h3>Fast capture</h3>
            <p>Write it down in seconds so your mind can relax.</p>
          </div>
          <div className="feature">
            <h3>Feels good on any screen</h3>
            <p>Responsive layout that stays crisp on phone or laptop.</p>
          </div>
          <div className="feature">
            <h3>Make progress visible</h3>
            <p>Mark tasks complete and watch your list get lighter.</p>
          </div>
          <div className="feature">
            <h3>Built for real life</h3>
            <p>Study, work, side projects — the flow stays the same.</p>
          </div>
        </div>
      </section>

      <section className="split section">
        <div className="card split-card">
          <h2>How it flows</h2>
          <div className="steps">
            <div className="step">
              <span className="step-num">1</span>
              <div>
                <h3>Start your space</h3>
                <p>Create an account and claim your personal planning corner.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <div>
                <h3>Drop in what matters</h3>
                <p>Capture tasks with just enough detail to move forward.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <div>
                <h3>Finish with satisfaction</h3>
                <p>Check things off and keep your momentum rolling.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card split-card">
          <h2>Made for your kind of busy</h2>
          <div className="pill-list">
            <span className="pill">School assignments</span>
            <span className="pill">Work sprints</span>
            <span className="pill">Personal routines</span>
            <span className="pill">Project planning</span>
            <span className="pill">Client deliverables</span>
            <span className="pill">Daily to-do lists</span>
          </div>
          <div className="cta-inline">
            <Link className="cta-btn" to="/dashboard">
              Jump in
            </Link>
            <Link className="cta-btn secondary-link" to="/contact">
              Say hello
            </Link>
          </div>
        </div>
      </section>

      <section className="card section">
        <div className="section-head">
          <h2>What people feel</h2>
          <p>Real reactions from real workflows.</p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>“It feels like a reset button for my brain. I can finally see my day clearly.”</p>
            <span className="quote-meta">Student</span>
          </div>
          <div className="testimonial">
            <p>“I love the calm layout. No distractions — just action.”</p>
            <span className="quote-meta">Builder</span>
          </div>
          <div className="testimonial">
            <p>“I write it down, I finish it, I move on. That’s the vibe.”</p>
            <span className="quote-meta">Freelancer</span>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band-inner">
          <div>
            <h2>Make today feel possible.</h2>
            <p>Start small, stay consistent, and watch your progress stack up.</p>
          </div>
          <div className="cta-band-actions">
            <Link className="cta-btn" to="/register">
              Start now
            </Link>
            <Link className="cta-btn secondary-link" to="/login">
              I already have an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
