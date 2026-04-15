  <header className="sticky z-90 pr-2   top-0 w-full   h-[95px] bg-white">
          
          <div className=" relative boc-border h-full w-full items-center justify-between px-10">

            {/* Logo */}
          

            {/* Right Section */}
            <div className="flex items-center gap-5">
              <LoginButtons />
            </div>

            {/* Tabs */}
            <div className="absolute bottom-0 left-10 h-[55px] grid grid-cols-4 ">
              {[{img : icon1, text : enabled ? "women" : "men"},{ img : tag , text : "deals"},{img : bag, text : 'All'},{ img : star , text : "For You"}].map((val,i) => (
                <div
                  key={i}
                  onClick={() => {setIndex(i);setobj(!obj) }}
                  className=" flex justify-center w-[60px] h-full cursor-pointer"
                >
                  <div
                    style={{
                      transitionDelay: `${257 * (i+1)}ms`,
                      transitionProperty: "border",
                    }}
                    className={`
                      relative flex justify-center h-full w-full rounded-t-xl
                   
                      ${index === i ? "bg-stone-50 border-2 border-black transition-[border]   border-b-0 ease-out z-40 " : "border-none"}
                    `}
                  >
                     <Link href={"#model1"} className="absolute bottom-0 text-[15px] text-black">
 
                        <Image  src={val.img} height={50} width={30} alt='icon' className=" p-1 object-contain"   />
                            {val.text}
</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute w-15 h-full flex  items-center   flex-row-reverse   right-0  bottom-0 mb-3">
              <Switch
                className="transform rotate-90 "
                checked={enabled}
                onCheckedChange={setEnabled}
              />
              <span className="h-[40px] w-[0.76px] bg-gradient-to-b from-white/0 via-black to-white/0 rounded-2xl mr-2 mt-2"></span>
            </div>

          </div> 

           

          {/* Bottom border line */}
            <span className={`absolute bottom-0 left-0 w-full ${obj ? "animate-grow-width z-10" : "-z-10 opacity-0" }  border mb-[1px]  border-black`}></span>
              <span className={`absolute bottom-0 left-0 w-full ${!obj ? "animate-grow-width z-10" : "-z-10 opacity-0" }  border mb-[1px]  border-black`}></span>
           


        </header>