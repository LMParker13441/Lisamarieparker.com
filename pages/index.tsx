import Head from 'next/head'
import React from 'react'

const Homepage = () => {
  return <>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous" />
    </Head>
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <div>
          <img src="/logo.png" alt='LMP Reporting, LLC' />
        </div>
        <div>
          <h1>LMP Reporting, LLC</h1>
        </div>
        <div>
          <h3>EIN: 83-3224285</h3>
        </div>
        <div>
          <h3>Lisa Marie Parker, RPR, CSR #13441, CLR</h3>
        </div>
      </div>
      <ul>
        <li>
          Lisa Marie has been reporting depositions in the Los Angeles area since 2009. She is conveniently
          located to Santa Monica, Century City, Beverly Hills, and Downtown Los Angeles. She offers real time
          services and specializes in complex civil litigation and rough drafts. Born and raised in Iowa, her
          strong, Midwest work ethic and warm professionalism show. </li>
        <li>
          Lisa Marie earned a double Bachelor’s Degree in Marketing and International Studies, Cum Laude, from
          California Lutheran University in 2005. She went on to attend court reporting school at Bryan College in
          Los Angeles and obtained her Certified Shorthand Reporter’s license in the State of California. She
          earned the Registered Professional Reporter’s certification from the National Court Reporting
          Association in 2009 and her LiveNote Certification in 2011.
        </li>
        <li>Lisa Marie is an active member of the Deposition Reporter’s Association of California. She supports
          students’ involvement in DRA. She’s also an active member of the National Court Reporter’s Association
          and is a Court Approved Reporter with the Los Angeles Superior Court and also a Realtime Systems
          Administrator.
        </li>
        <li>
          To schedule a deposition, email: <a href="mailto:lmp@lisamarieparker.com">lmp@lisamarieparker.com</a>
        </li>
      </ul>
    </div>
  </>
}

export default Homepage;