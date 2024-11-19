import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const phases = [
    {
      title: "Phase 1",
      subtitle: "$HONEY THE MARKET",
      items: [
        "Reach 1500 holders",
        "Dextools/Dexscreener update",
        "Meme contests",
        "Become part of /biz/'s subconscious mind",
        "Constant X raids",
      ],
    },
    {
      title: "Phase 2",
      subtitle: "$SMELL THE $HONEY",
      items: [
        "Reach 1500 holders",
        "Coingecko/Coinmarketcap listing",
        "Optimizing and fleshing out the website",
        "Regular paid ads",
        "Extend our reach throughout TikTok, Instagram and Reddit",
      ],
    },
    {
      title: "Phase 3",
      subtitle: "BITE THE $HONEY",
      items: [
        "Reach 50,000 holders",
        "Official Honey merch release",
        "Tier 1 CEX listings",
        "Turn the moon into HONEY",
      ],
    },
  ];

  const images = [
    {
      imgScr: "/1.png",
      title: "",
      id: 20,
    },
    {
      imgScr: "/2.png",
      title: "",
      id: 21,
    },
    {
      imgScr: "/3.png",
      title: "",
      id: 23,
    },
    {
      imgScr: "/4.png",
      title: "",
      id: 24,
    },
    {
      imgScr: "/5.png",
      title: "",
      id: 25,
    },
    {
      imgScr: "/6.png",
      title: "",
      id: 26,
    },
    {
      imgScr: "/7.png",
      title: "",
      id: 7,
    },
    {
      imgScr: "/8.png",
      title: "",
      id: 28,
    },
    {
      imgScr: "/9.png",
      title: "",
      id: 29,
    },
    {
      imgScr: "/10.png",
      title: "",
      id: 30,
    },
    {
      imgScr: "/11.png",
      title: "",
      id: 31,
    },
    {
      imgScr: "/12.png",
      title: "",
      id: 32,
    },
  ];
  return (
    <div className="bg-[#FFFFA8] min-h-screen relative overflow-hidden h-full">
      <Header />
      <section className="container  z-10 relative flex flex-col items-center">
        <div>
          <img
            className="w-[260px] lg:w-[550px] xl:w-[834px]"
            src="/logo.png"
            alt=""
          />
        </div>
        <h2
          className="text-center  mt-4 mb-6 text-[#FFA500] font-bold font-comicBold text-3xl lg:text-4xl xl:text-5xl"
          style={{
            textShadow: `
            3px 3px 0 #2d3436,
            -1px -1px 0 #2d3436,  
            1px -1px 0 #2d3436,
            -1px 1px 0 #2d3436,
            1px 1px 0 #2d3436,
            4px 4px 8px rgba(0,0,0,0.3)
          `,
          }}
        >
          The best coin on the blockchain
        </h2>
        <div>
          <img
            className="lg:w-[340px] xl:w-[400px] 2xl:w-[520px] block mx-auto"
            src="/m.svg"
            alt=""
          />
        </div>
        <div className="bg-bulb absolute -top-[24%] xl:top-[-20%] left-[15%] lg:left-[38%] -z-10 lg:w-[952px] lg:h-[952px] w-[550px] h-[550px] rounded-full"></div>
        <div className="bg-bulb absolute xl:top-[290%] xl:-translate-y-[290%] 2xl:top-[340%]   left-1/2 -translate-x-1/2 -z-10 2xl:w-[1200px] 2xl:h-[1200px] lg:w-[850px] lg:h-[850px] w-[550px] h-[550px] rounded-full top-[40%]  "></div>
      </section>
      {/* section 2 */}
      <section className="relative z-40  overflow-hidden bg-bg_2 py-16 xl:py-20">
        <div className="container flex flex-col gap-14 lg:gap-20 items-center">
          <div className="inline-flex mx-auto justify-center">
            <div className="border  inline-flex items-center  justify-center border-black  backdrop-blur-[12px] px-10 lg:px-24  py-6 lg:py-16 bg-white/10 rounded-[16px] lg:rounded-[30px]">
              <p className="text-4xl -mt-2.5 lg:-mt-4 roadmap_text !leading-none lg:text-8xl ">
                Roadmap
              </p>
            </div>
          </div>
          <div className="max-w-7xl w-full">
            <div className="relative flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
              {phases.map((phase, index) => (
                <div
                  key={phase.title}
                  className={`w-full border border-black md:w-1/2 lg:w-1/3  bg-phase rounded-[20px] p-6  ${
                    index === 1 ? "lg:z-10 lg:scale-110" : "lg:z-0"
                  }`}
                  style={{
                    boxShadow: "0px 0px 54px 0px rgba(0, 0, 0, 0.55)",
                  }}
                >
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl text-center font-comicBold font-bold mb-2">
                      {phase.title}
                    </h2>
                    <h3 className="text-lg  text-black text-center md:text-xl xl:text-3xl mb-4">
                      {phase.subtitle}
                    </h3>
                  </div>
                  <ul className="space-y-2 pt-6">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 26 27"
                          fill="none"
                        >
                          <rect
                            y="0.753906"
                            width={26}
                            height="25.4922"
                            rx={5}
                            fill="black"
                          />
                          <path
                            d="M22.8617 7.3049C23.2897 8.33988 22.6906 9.04862 21.5315 9.74798C20.5965 10.3105 19.4054 10.9217 18.1433 11.9651C16.9052 12.9879 15.6981 14.2207 14.625 15.4338C13.7069 16.4753 12.8328 17.5501 12.0047 18.656C11.5907 19.21 11.0117 20.0369 11.0117 20.0369C10.8039 20.3378 10.5177 20.5841 10.1802 20.7526C9.84261 20.921 9.46484 21.0061 9.08251 20.9997C8.70038 20.9975 8.32518 20.9038 7.9926 20.7274C7.66001 20.551 7.38108 20.2978 7.18235 19.9919C6.18326 18.4197 5.4132 17.7982 5.05917 17.576C4.11209 16.9779 3 16.8916 3 15.5004C3 14.3951 3.99508 13.4998 5.22218 13.4998C6.08926 13.5298 6.89432 13.8495 7.60838 14.2995C8.06442 14.5863 8.54746 14.967 9.0495 15.4666C9.72232 14.606 10.422 13.7641 11.1477 12.942C12.3048 11.6342 13.6709 10.2308 15.136 9.01956C16.5761 7.82895 18.2413 6.71428 20.0064 6.12554C21.1565 5.74118 22.4346 6.26898 22.8617 7.3049Z"
                            fill="#FFFFA8"
                          />
                        </svg>
                        <span className="text-base flex-1 xl:text-xl">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <img src="/5tl8l8.webp" className="w-full object-cover" />
      </section>

      <section className=" px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h1
            className="mb-6 text-center font-comicBold text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-wide"
            style={{
              color: "#ff8c00",
              textShadow: `
              2px 2px 0 #cc7000,
              3px 3px 0 #cc7000,
              4px 4px 0 #cc7000,
              5px 5px 8px rgba(0,0,0,0.3)
            `,
            }}
          >
            Icons of Infiltration
          </h1>

          <p className="mx-auto mb-12 text-black/75 max-w-3xl text-center text-lg md:text-xl">
            With our easily recognizable imagery, we’re sure to make people
            pause and wonder who we are, sparking curiosity and intrigue
            wherever we go. Join us in this bold and disruptive journey!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="aspect-square relative rounded-2xl overflow-hidden bg-black/10 p-4 md:p-5"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden">
                  <img
                    src={src.imgScr}
                    alt={`Icon ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
