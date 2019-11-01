import React, { Component } from 'react';
import './index.css';
import img from '../../picture1.jpg'
import BelowNav from '../../components/belowNav';

class HomePage extends Component {
  render() {
  return (
    <div className="homepage">
      <BelowNav pageName={this.props.pageName}/>
    <div className="row">
      <div className="col-md-8">
      <div className="row">
        <div className="col-md-12 add-padding">
        <div className="img-container">
                <img id="main-img" src={img} alt="Jonathan image" />
                <div className="bottom-left">About me</div>
            </div>
          </div>
        </div>

        <div className="row">
        <div className=" col-md-12 main-column-one">
            <p>
                Hey! If your reading this you'd probably like to know more about who I am:
            </p>
            <br/>
            <p>
                My name is Jonathan Morfin. I'm 23 years old living in Boston MA. I'm a developer that enjoys learning new ideas, new technologies, and meeting new people.
            </p>
            <br/>
            <p>
                You might be wondering why I chose to pursue developoment as a career rather than a career in the medical field
                considering I graduated with a B.S. in Biology. One of the reasons I decided not to pursue the biological sciences was because I simply don't have a passion for
                it. Like anything else, if you love it, do it, if you don't, you shouldn't force yourself. One of my strengths is problem solving and being highly detail oriented. These are must-need qualities for candidates pursuing any type
                of CS related careers. After working a few jobs in other unrelated fields, I decided to choose to pursue development.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 main-column-two">
                <h2>What I currently know</h2>
                <br/>
                <p>
                    Currently, I have experience in Python, Javascript, HTML5, CSS3, SQL, relational databases, and frameworks Flask and React. I enjoy building full stack applications, you can check out some of these in the 'Projects' section.
                </p>
         </div>
        </div>

        </div>


          <div className="col-md-4 side">
            <div className="row">
              <div className="col-md-12">
                <h2 className="make-white"><strong>Me</strong></h2>
                <br/>
                <p>
                    This is Jonathan Morfin, a software developer born and raised in the great city of
                    Boston Massachussetts. After graduating high school, Jonathan attended the University of Massachussetts Amherst
                    where he studied Biology. Upon graduating he was unsure of what he wanted to pursue. On a leap of faith, he left
                    Boston to live in Nashville TN on his own to get out of his comfort zone. In Nashville, Jonathan worked various jobs
                    and while working as a leasing consultant, discovered that he wanted to pursue development. After meeting numerous sofware developers he decided to move back to home and attend a coding bootcamp.
                </p>
                  </div>
                </div>

            <div className="row">
            <div className="col-md-12">


                    <h2 className="make-white"><strong>Interests</strong></h2>
                    <br/>
                        <p>
                            - Development <br/>
                            - Science & Technology <br/>
                            - Sports <br/>
                            - Music <br/>
                            - Exercise <br/>
                        </p>
              </div>
            </div>


            <div className="row">
            <div className="col-md-12">
                <div className="follow-me">
                        <h2 className="make-white"><strong>Follow Me</strong></h2>
                        <br/>

                            <ul>
                                <li><a href="https://www.facebook.com/jonathan.morfin.5?ref=bookmarks" target="_blank">facebook</a></li>
                                <li><a href="https://www.linkedin.com/in/jonathanmorfin411/" target="_blank">linkedin</a></li>
                                <li><a href="https://github.com/jmorfin23" target="_blank">github</a></li>
                            </ul>

                </div>
              </div>
          </div>
          </div>
        </div>
    </div>
  );
}
}
export default HomePage;
