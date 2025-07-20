import React from 'react';
import $ from 'jquery';

class FAQ extends React.Component {

 componentDidMount() {
  $(document).ready(function () {

    $('#collapse-button').hide();

    $('#readmore').hide();

    $('.accordion-body').hide().addClass('hidden');

    $('[data-accordion-target]').attr('aria-expanded', 'false');

    // readmore
    $('#read').off('click').on('click', function () {

      $('#readmore').stop(true, true).toggle();
    });

    // seemore
    $('#see-more').off('click').on('click', function () {

      $('#collapse-button').stop(true, true).toggle();
    });

    // accordion

    $('[data-accordion-target]').off('click').on('click', function (e) {

      e.preventDefault();

      const targetId = $(this).data('accordion-target');

      const $target = $(targetId);

      const isVisible = $target.is(':visible');

      $('[data-accordion-target]').attr('aria-expanded', 'false');

      $('.accordion-body').stop(true, true).slideUp().addClass('hidden');

      if (!isVisible) {

        $(this).attr('aria-expanded', 'true');

        $target.stop(true, true).slideDown().removeClass('hidden');
      }
    });
  });
}


  render() {
    return (
      <>
        <div
          id="accordion-color"
          data-accordion="collapse"
          className="m-5"
          data-active-classes="bg-white text-sky-900"
        >
          <h2 id="accordion-color-heading-1">
            <button
              type="button"
              className="transition-colors duration-300 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-none rounded-t-xl hover:bg-white focus:bg-white gap-3"
              data-accordion-target="#accordion-color-body-1"
              aria-expanded="false"
              aria-controls="accordion-color-body-1"
            >
              <span className="text-sky-900 text-2xl capitalize font-sans font-normal m-5">
                what is autism?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-1"
            className="accordion-body hidden m-5"
            aria-labelledby="accordion-color-heading-1"
          >
            <div className="p-5 border border-b-0 border-none bg-white text-sky-900">
              <p className="mb-2 font-sans font-normal text-lg">
                Autism Spectrum Disorder (ASD) is a complex neurodevelopmental condition that affects how an individual thinks, communicates, interacts socially, and experiences the world.
                <br />
                <span id="readmore">
                  It is called a spectrum disorder because symptoms and abilities can vary greatly from person to person.
                </span>
                <br />
                <button className="hover:underline cursor-pointer" id="read">
                  readmore
                </button>
              </p>
            </div>
          </div>

          <h2 id="accordion-color-heading-2">
            <button
              type="button"
              className="transition-colors duration-300 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-none hover:bg-white focus:bg-white gap-3"
              data-accordion-target="#accordion-color-body-2"
              aria-expanded="false"
              aria-controls="accordion-color-body-2"
            >
              <span className="text-sky-900 text-2xl capitalize font-sans font-normal m-5">
                what causes autism?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-2"
            className="accordion-body hidden m-5"
            aria-labelledby="accordion-color-heading-2"
          >
            <div className="p-5 border border-b-0 border-none bg-white text-sky-900">
              <p className="mb-2 font-sans font-normal text-lg">
                The causes of autism are not fully understood, but research suggests a combination of genetic and environmental factors contribute to its development.
              </p>
            </div>
          </div>

          <h2 id="accordion-color-heading-3">
            <button
              type="button"
              className="transition-colors duration-300 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-none hover:bg-white focus:bg-white gap-3"
              data-accordion-target="#accordion-color-body-3"
              aria-expanded="false"
              aria-controls="accordion-color-body-3"
            >
              <span className="text-sky-900 text-2xl capitalize font-sans font-normal m-5">
                misconceptions
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-color-body-3"
            className="accordion-body hidden m-5"
            aria-labelledby="accordion-color-heading-3"
          >
            <div className="p-5 border border-b-0 border-none bg-white text-sky-900">
              <ul className="list-decimal list-inside space-y-3 font-sans font-normal text-lg">
                <li>
                  <strong>All autistic people are the same:</strong> Autism is a spectrum with a wide range of abilities, needs, and behaviors.
                </li>
                <li>
                  <strong>Autistic people don’t have emotions or empathy:</strong> Many do—often deeply—but may express them differently.
                </li>
                <li>
                  <strong>Bad parenting causes autism:</strong> Autism is a neurodevelopmental condition, not caused by parenting style.
                </li>
                <li>
                  <strong>Vaccines cause autism:</strong> This myth is debunked. No scientific link has been found between vaccines and autism.
                </li>
                <li>
                  <strong>Autism equals intellectual disability:</strong> Many autistic individuals have average or above-average intelligence.
                </li>
                <div id="collapse-button">
                  <li>
                    <strong>All autistic individuals are nonverbal:</strong> Some may be, but many use speech or alternative communication methods.
                  </li>
                  <li>
                    <strong>Autism can be cured:</strong> It is a lifelong condition. Support and acceptance help individuals thrive.
                  </li>
                  <li>
                    <strong>Children outgrow autism:</strong> They may develop skills over time, but autism is lifelong.
                  </li>
                  <li>
                    <strong>Only boys are autistic:</strong> Autism affects all genders, though girls may be underdiagnosed.
                  </li>
                  <li>
                    <strong>Autistic people don’t want friends:</strong> Many do, but may struggle with social cues or interaction.
                  </li>
                  <li>
                    <strong>All autistic people are geniuses or savants:</strong> Savant skills are rare and not representative of the spectrum.
                  </li>
                  <li>
                    <strong>Screen time causes autism:</strong> There is no evidence supporting this claim.
                  </li>
                  <li>
                    <strong>Autistic people can’t work or live independently:</strong> Many lead successful, independent lives with or without support.
                  </li>
                  <li>
                    <strong>Meltdowns are just tantrums:</strong> They are often due to sensory overload or emotional stress, not misbehavior.
                  </li>
                  <li>
                    <strong>Autism is a mental illness:</strong> It is a neurodevelopmental condition, not a mental disorder.
                  </li>
                </div>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <button
                className="hover:underline text-sky-800 font-sans font-normal cursor-pointer text-lg"
                id="see-more"
              >
                see more
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FAQ;