import React from 'react';
import ReactDOM from 'react-dom';

 // ==== CSS ==== //
import './jeux.scss';

const Jeux = () => (
  <main className="jeux">
    <article className="jeux-article clearfix">
        <div className="container">
        <div className="intro">
            <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="images/jeux/callofduty.png" alt="" />
            <div className="intro-text left-0 text-center bg-faded rounded p-5">
            <h2 className="article-heading mb-4">
                <span className="article-heading-upper">Call of Duty</span>
            </h2>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim ratione praesentium eos sed. Dignissimos similique nesciunt magni corporis deleniti, officia blanditiis corrupti ipsam non saepe animi illo, vel numquam a recusandae ea qui eum.
            </p>
            </div>
        </div>
        </div>
    </article>

    <article className="jeux-article clearfix">
        <div className="container">
        <div className="intro">
            <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="images/jeux/counter.png" alt="" />
            <div className="intro-text left-0 text-center bg-faded rounded p-5">
            <h2 className="article-heading mb-4">
                <span className="article-heading-upper">Counter Strike: Global Offensive</span>
            </h2>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim ratione praesentium eos sed. Dignissimos similique nesciunt magni corporis deleniti, officia blanditiis corrupti ipsam non saepe animi illo, vel numquam a recusandae ea qui eum.
            </p>
            </div>
        </div>
        </div>
    </article>

    <article className="jeux-article clearfix">
        <div className="container">
        <div className="intro">
            <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="images/jeux/dos2.png" alt="" />
            <div className="intro-text left-0 text-center bg-faded rounded p-5">
            <h2 className="article-heading mb-4">
                <span className="article-heading-upper">Divinity: Original Sin 2</span>
            </h2>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim ratione praesentium eos sed. Dignissimos similique nesciunt magni corporis deleniti, officia blanditiis corrupti ipsam non saepe animi illo, vel numquam a recusandae ea qui eum.
            </p>
            </div>
        </div>
        </div>
    </article>
  </main>
);

export default Jeux;
