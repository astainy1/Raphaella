import React from 'react';

class SectionContent extends React.Component {
  render() {
    return (
      <div className="bg-sky-900 py-10">
        <div className="max-w-5xl mx-auto  justify-center px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto md:h-72 pt-5">
          
          <div className="bg-transparent text-white p-4">
            <h1 className="text-xl font-bold capitalize font-sans mb-4">
              Providing Essential <br /> Supplies
            </h1>
            <p className="capitalize font-sans">
              Collecting and distributing clothes, toys, books, and school materials.
            </p>
          </div>

          <div className="bg-transparent text-white p-4">
            <h1 className="text-xl font-bold capitalize font-sans mb-4">
              Community Outreach Programs
            </h1>
            <p className="capitalize font-sans">
              Raising awareness to eliminate stigma.
            </p>
          </div>

          <div className="bg-transparent text-white p-4">
            <h1 className="text-xl font-bold capitalize font-sans mb-4">
              Parent & Caregiver <br /> Training
            </h1>
            <p className="capitalize font-sans">
              Helping families understand autism and provide the best care.
            </p>
          </div>

          <div className="bg-transparent text-white p-4">
            <h1 className="text-xl font-bold capitalize font-sans mb-4">
              Fighting for <br /> Autism Inclusion
            </h1>
            <p className="capitalize font-sans">
              Advocating for autism-friendly policies in liberia and beyond.
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default SectionContent