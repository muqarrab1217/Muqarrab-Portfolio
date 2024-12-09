/**
 * @copyright 2024 muqarrabahmed
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ava Thompson',
    imgSrc: './images/people-5.jpg',
    company: 'TechMosaic'
  },
  {
    content: 'Great Work ! A Canada Based Client required a full stack desktop based application for his Gym Fitness Store',
    name: 'Abdoo Sagar',
    imgSrc: 'https://img.icons8.com/bubbles/50/user.png',
    company: 'Gym Fitness Store'
  },
  {
    content: 'Creative and skilled! Managing the Social Media Accounts of FAST COMPUTING SOCIETY with great success.',
    name: 'Fast Computing Society',
    imgSrc: './images/fcs.jpeg',
    company: 'Fast Nuces Islamabad'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and smooth backend integration. Highly recommend.',
    name: 'Qasim Hassan',
    imgSrc: './images/people-2.jpg',
    company: 'Fast Nuces Islamabad'
  },
  {
    content: 'Project Well Done ! Point of Sale System of a restaurant is fully functional with real time report generation',
    name: 'Bashaarat Hussain',
    imgSrc: './images/sir-bashaarat.jpg',
    company: 'Fast Nuces Islamabad'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: './images/people-6.jpg',
    company: 'Skyline Digital'
  }
];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      x: '-50%',  // Move it to the left by 100% of its width
      repeat: -1,  // Repeat the animation indefinitely
      yoyo: true,  // Make it reverse when it reaches the end
      duration: 10,  // Set the duration of the animation
      ease: 'linear',  // Smooth, continuous movement
    });
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          What our customers say
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review