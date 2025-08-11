'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'
import { withBasePath } from '../../lib/basePath'

export default function MeetTheGO() {
  const [activeTab, setActiveTab] = useState('daddy')

  const daddyGO = {
    name: "Dr. Daniel Kolawole Olukoya (DKO)",
    title: "General Overseer, MFM Worldwide",
    image: "/images/leadership/dr-olukoya.jpg",
    bio: [
      "Dr. Daniel Kolawole Olukoya (DKO) was born in Akure, Ondo State, Nigeria to Mr. Olukoya, a Police officer and Mrs. Olukoya, a trader. While registered at St. John's CAC Primary School, Akure, he was recognized as an exceptionally intelligent child coming tops throughout his stay at the school. Later when his family moved to Lagos, he was enrolled at St. Jude's Primary school, Ebute metta from which he graduated with excellent results.",
      "Dr Daniel Olukoya then proceeded to Methodist Boys' High School (MBHS), Broad Street, Lagos (established in 1878). Incidentally, this is where he became born again. It was also at MBHS that he encountered an Indian teacher who once said in class \"Boys, if you want to escape poverty, READ YOUR BOOKS!\". Dr Daniel Olukoya doggedly followed this advice, studying from 9pm to 3am daily. By the time Dr Daniel Olukoya finished from MBHS, he was the best graduating student of his set.",
      "In 1976, DKO was admitted into the University of Lagos (Unilag) to study Microbiology. He graduated from Unilag in 1980 with a first-class degree in Microbiology. He was the first person to have achieved a first-class in the course at the university and his G.P.A is still the highest recorded so far (as at February 2010) in that course.",
      "Soon after graduation, DKO won a scholarship to study for a Doctor of Philosophy (PhD) degree in Molecular Genetics at the University of Reading, United Kingdom. Despite the natural difficulty of the programme, DKO earned his PhD in 3 years and returned to Nigeria.",
      "Upon his return to Nigeria, DKO joined the Nigerian Institute of Medical Research (NIMR), Yaba, where his reputation as an exceptional Geneticist of African origin became established. DKO emerged as an authority in the study of genetics, publishing over 70 scientific papers in a short span (a remarkable feat by any standard). He also taught Genetics and was external examiner in a number of universities. Moreover, he has attended and presented papers at scientific conferences in almost all continents of the world. Even today, DKO continues to contribute to the field of genetics and biotechnology via the Daniel & Fola Biotechnology Foundation, a registered NGO established to empower Nigerian citizens with modern and contemporary laboratory skills in Molecular Biology and Biotechnology.",
      "DKO's father, apart from being a policeman, was also a pastor at the Christ Apostolic Church (CAC). Thus, he was raised in a Christian home with Christian beliefs. Throughout all his years in school, DKO was committed to the service of the Lord Jesus Christ. His passion for Jesus and his spiritual fire increased tremendously during his doctorate degree in the United Kingdom. DKO's ministry is heavily influenced by the work of the late Apostle Joseph Ayodele Babalola, the founder of the CAC church."
    ],
    quote: {
      text: "Apostle Joseph Ayodele Babalola was a minister of God who understood the power of prayer. He was a man mightily used by God to ignite the fire of the first Christian revival in Nigeria in the 1930s. Brother J.A. and his team of aggressive prayer warriors entered forbidden forests, silenced demons that demanded worship and paralysed deeply rooted, anti-gospel activities. Sometimes, beginning from the highest places, they openly disgraced satanic agents, emptied hospitals by the healing power of the Lord Jesus Christ, rendered witchdoctors jobless, and they started the first indigenous Holy Ghost filled church in Nigeria. So far – and we stand to be corrected – none has equalled, let alone surpassed this humble brother in the field of aggressive evangelism in this country.",
      author: "Dr. Daniel Olukoya"
    }
  }

  const mummyGO = {
    name: "Pastor (Mrs.) Shade Olukoya",
    title: "Assistant General Overseer, MFM Worldwide",
    image: "/images/leadership/pastor-folashade.jpg",
    bio: [
      "Mrs. Shade Olukoya is the wife of the General Overseer. With her beloved demeanor, she provides solid leadership alongside her husband at the MFM Church.",
      "Sister Shade Olukoya was born into the family of Mr. & Mrs. George F. Adesanya as the fifth of seven children. All members of the family were brought up as God-fearing Christians and attended the Christ Apostolic Church. Her Dad, George, who was a Marine Engineer with the Nigerian Ports Authority (NPA) for many years, ensured that all his children got good education.",
      "For her primary education, Sis Shade attended Surulere Baptist School, Modupe Johnson, and proceeded to Reagan Memorial Baptist Girls Secondary School, Sabo, Yaba, for her secondary education. She also attended Ajjeh Comprehensive High School during the Jakande regime in Lagos State. Sis Shade attended the Darnley Career Academy, London, UK from where she obtained a diploma in Fashion Design and also a diploma in Fine Arts and Interior Decoration. She also obtained a Bachelor of Arts degree in Fine Art from the University of East London and a Masters Research in Fine Art from the Royal College of Arts, London, UK.",
      "Mrs. Shade Olukoya is a talented artist. She is the artistic illustrator of almost all 250 books (as at July 2015) authored by her husband. As a small child, Sis Shade showed so much interest in creativity, especially in the natural habitat, which kept her wondering about God and his works. She also received a lot of encouragement from her father upon realising her artistic gift. Sis Shade cites her sense of imaginative composition as another special gift from God which has helped her tremendously in her art career.",
      "Mrs. Shade Olukoya is the International Coordinator, MFM Women's Foundation. The foundation has been established to empower women in the church through adult literacy education and skill acquisition training programmes.",
      "Mummy G.O. is also a specialist musical performer. She is a great soloist who performs hymns and many genres of Christian music as the spirit leads. On special occasions and to the admiration of the congregation, Sis Shade and her husband, Dr. Olukoya give duo musical performances. This activity is usually a cherished sight to behold. Sis. Shade is a firebrand. From her youth, she has had the gift of deep dreams and visions. Mrs. Shade Olukoya's messages and ministrations in church services and special programmes are wonderful with results following to the glory of God."
    ]
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-mfm-primary text-white py-20">
        <div className="absolute inset-0">
          <Image
            src={withBasePath('/images/backgrounds/mfm-bg.jpg')}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Link href="/about" className="inline-flex items-center gap-2 text-mfm-secondary hover:text-white transition-colors duration-300 mb-6">
            <FaArrowLeft />
            <span>Back to About</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">MUMMY AND DADDY G.O</h1>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('daddy')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${
                  activeTab === 'daddy'
                    ? 'bg-white text-mfm-primary shadow-md'
                    : 'text-gray-600 hover:text-mfm-primary'
                }`}
              >
                About Dr Daniel Olukoya (Daddy G.O)
              </button>
              <button
                onClick={() => setActiveTab('mummy')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${
                  activeTab === 'mummy'
                    ? 'bg-white text-mfm-primary shadow-md'
                    : 'text-gray-600 hover:text-mfm-primary'
                }`}
              >
                About Pst. (Mrs.) Shade Olukoya (Mummy G.O)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'daddy' ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative w-full h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={withBasePath(daddyGO.image)}
                      alt={daddyGO.name}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Biography */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-mfm-dark mb-4">{daddyGO.name}</h2>
                  <p className="text-mfm-primary font-semibold mb-6 text-lg">{daddyGO.title}</p>
                  
                  <div className="space-y-4 text-gray-800 leading-relaxed">
                    {daddyGO.bio.map((paragraph, index) => (
                      <p key={index} className="text-base text-justify">{paragraph}</p>
                    ))}
                  </div>

                  {/* Block Quote */}
                  <div className="mt-8 p-6 bg-purple-50 border-l-4 border-mfm-primary rounded-r-lg">
                    <blockquote className="text-gray-800 italic text-lg">
                      "{daddyGO.quote.text}"
                    </blockquote>
                    <p className="text-mfm-primary font-semibold mt-2">— {daddyGO.quote.author}</p>
                  </div>

                  {/* Footer Note */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      The works of Dr. Daniel Olukoya are published by the Battle Cry Christian Ministries. 
                      These published works include over 250 life-changing Christian books (as at July 2015), 
                      audio tapes and CDs, video discs and many more.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative w-full h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={withBasePath(mummyGO.image)}
                      alt={mummyGO.name}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Biography */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-mfm-dark mb-4">{mummyGO.name}</h2>
                  <p className="text-mfm-primary font-semibold mb-6 text-lg">{mummyGO.title}</p>
                  
                  <div className="space-y-4 text-gray-800 leading-relaxed">
                    {mummyGO.bio.map((paragraph, index) => (
                      <p key={index} className="text-base text-justify">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 