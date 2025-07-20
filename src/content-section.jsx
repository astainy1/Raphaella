import React from 'react';

class SectionContent extends React.Component {
  render() {
    return (
      <div className="h-auto md:h-80 bg-sky-900 py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="text-white p-4 text-lg">
            <h1 className="text-lg sm:text-xl font-bold capitalize font-sans mb-2">
              Providing Essential Supplies
            </h1>
            <p className="text-sm sm:text-base font-sans capitalize">
              Collecting and distributing clothes, toys, books, and school materials.
            </p>
          </div>

          <div className="text-white p-4">
            <h1 className="text-lg sm:text-xl font-bold capitalize font-sans mb-2">
              Community Outreach Programs
            </h1>
            <p className="text-sm sm:text-base font-sans capitalize">
              Raising awareness to eliminate stigma.
            </p>
          </div>

          <div className="text-white p-4">
            <h1 className="text-lg sm:text-xl font-bold capitalize font-sans mb-2">
              Parent & Caregiver Training
            </h1>
            <p className="text-sm sm:text-base font-sans capitalize">
              Helping families understand autism and provide the best care.
            </p>
          </div>

          <div className="text-white p-4">
            <h1 className="text-lg sm:text-xl font-bold capitalize font-sans mb-2">
              Fighting for Autism Inclusion
            </h1>
            <p className="text-sm sm:text-base font-sans capitalize">
              Advocating for autism-friendly policies in Liberia and beyond.
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default SectionContent;