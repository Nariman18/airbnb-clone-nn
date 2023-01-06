import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
import Mapbox from '../components/Mapbox'

function Search({searchResult}: any) {

    const router= useRouter()

    //ES6 Destructuring
    const {location, startDate, endDate, noOfGuests} = router.query

    const formattedStartDate = startDate && format(new Date(startDate as string), "dd MMMM yy");
    const formattedEndDate = endDate && format(new Date(endDate as string), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
       <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests</p>
                <h1 className='text-3xl font-semibold mb-6'>Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className="button">Price</p>
                    <p className="button">Rooms and Beds</p>
                    <p className="button">More filters</p>
                </div>

                <div>
                {searchResult.map(({img, location, title, description, star, price, total}: any) =>(
                  <InfoCard 
                  key={title}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  />
                ))}
                </div>

            </section>

            <section className='hidden xl:inline-flex xl:min-w-[40%] sticky top-[76px] h-[40em] cursor-pointer'>
              <Mapbox 
                searchResult={searchResult}
              />
            </section>
        </main>

       <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  )
  return {

    props: {
      searchResult: searchResult
    }
    
  }

  }
