import React from 'react'
import styled from 'styled-components';
import {features} from '../Footer/constant';

const storeFeatured = () => {
  return (
    <Wrapper>
      <div className="features-center">
        {features.map((feature) =>{
            const {id, icon, title, text} = feature;
            return (
                <article key={id} className="feature">
                    <i>{icon}</i>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </article>
            );
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
h3{
	margin-top:10px;
}

  p {
  	margin: 15px 0 0;
  	line-height: 1.5;
	font-size: 16px;
  	color: var(--clr-primary-1);
  }

  .features-center {
	padding-left: 100px;
	padding-right: 100px;
	background: var(--clr-grey-3);
  	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  	grid-gap: 30px;
  }

  .feature {
  	text-align: left;
    align-items:left;
  	padding: 2.5rem 1rem;
  	border-radius: var(--radius);
  }

  i {
    font-size: 3rem;
  	width: 4rem;
  	height: 4rem;
  	display: grid;
  	margin-bottom: 0.3rem;
    svg{
        align-items:left;
    }
  	border-radius: 50%;
  	/* background: var(--clr-primary-10); */
  	color: var(--clr-primary-10);
  }

`

export default storeFeatured;

