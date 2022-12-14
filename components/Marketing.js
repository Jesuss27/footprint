import React from 'react'
import InnerMarketing from './InnerMarketing'
import computer from "../images/computer-min.jpg"
import journal from "../images/journal-min.jpg"
import minimalBanner from "../images/minimal-banner-min.jpg"

function Marketing() {
    const marketingContent = [
        {
            header:"DIGITAL MARKETING SERVICES",
            description:`We are a no non-sense agency. We cut to the chase without throwing
            a bunch of words, tactics and ideas that are difficult to understand and achieve.
            If there is a portion of your idea that we cannot achieve we will help
            you find the right person. No matter what, we got you when it comes to marketing.`,
            CTA:true,
            image:computer,
            key:"sdf8asdjf8"
        },
        {
            header:"Brand Building",
            description:`Building a lasting brand is essential to tyour business growth. Whether
            you are building your brand from scratch or refreshing your current one, we are here 
            to help your dreams become a reality. Out collaborative creative meets data approach
            esures your brand will make a lasting impact to your target demographic.`,
            CTA:false,
            image:journal,
            key:"sdf866387685f8"
        },
        {
            header:"Strategy",
            description:`We are a no non-sense agency. We cut to the chase without throwing
            a bunch of words, tactics and ideas that are difficult to understand and achieve.
            If there is a portion of your idea that we cannot achieve we will help
            you find the right person. No matter what, we got you when it comes to marketing.`,
            CTA:true,
            image:minimalBanner,
            key:"5595dfg23asdjf8"
        },
    ]
  return (
    <>
    {
        marketingContent.map(item => (
            <InnerMarketing key={item.key} header={item.header} description={item.description} CTA={item.CTA} image={item.image} />
            )
        )
    }
    </>
  )
}

export default Marketing