'use client'

import { useState } from "react"
import "./Header.css"
import "./Loader.css"
import Image from "next/image"

export const Header = () => {
    const [text,updateText]=useState("Lets Begin")
    const [renderPrompt,renderUpdate]=useState(true)
    const [gameProgress,updateProgress]=useState(0)
    const [secretProgress,updateSecret]=useState(0)
    const [helpIamTired,updateSecret2]=useState("")
    const [rainImage,updateRain] = useState("")
    if (gameProgress!==4){
    
        
        return(

            <div className="backgroundPage  h-fit">
                    <div className={rainImage}>



    
                
                        <div className="centered marginTop marginBot2">
                            <span className="coolWelc text-4xl">
                                {///UP here you will write some basic info and instructions!}
                                    }
                                Test your taste! <br/> (Corona aftermath)
                                
                            </span>
                        </div>
    
                        <div className="flexDisp autoHeight">
                        
                                {//}here goes Prompt Menu
                                    }           
                            {
                                renderPrompt &&
                                <PromptMenu renderUpdate={renderUpdate}/>
                            }
    
    
                            <div className="widthHalf autoHeight marginRight marginLeft11  ">
                                <div className="marginBot2 borderGame1 ">

                                <HeaderGame 
                                update={updateProgress} 
                                stage={gameProgress}
                                helpIamTired={helpIamTired}
                                updateSecret2={updateSecret2}
                                secret={secretProgress}
                                />
                                </div>
            
                                <div>
                            

                                    <div className={(gameProgress>0)&&"borderGame autoHeight"}>
                    
                                        <div className="flexDisp  fullHeight  flexEnd centeredMore smallMargin centeredMore1">
                                    
                                            <Test 
                                            update={updateProgress}
                                            stage={gameProgress}
                                            renderUpdate={renderUpdate}
                                            secret={secretProgress}
                                            updateSecret={updateSecret}
                                            text={text}
                                            upText={updateText}
                                            helpIamTired={helpIamTired}
                                            updateSecret2={updateSecret2}
                                            makeItRainHoouray={updateRain}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
    
                        </div>
    
                        <Description stage={gameProgress}/>
                    </div>
                 </div>
        )
    
    }
    else{
        return(
            <Description stage={gameProgress}/>
        )
    }
}

export const PromptMenu = (props) => {
    
    return(
        <div className="absolPos widthText PosLeft marginTop2">
            <div className="border2 backColor1 centered ">
                    <div className="moveRight border1">
                        <button className="coolButt1 promptHover border" onClick={()=>{
                            props.renderUpdate(false)
                        }}><b>Close Prompt</b>
                            <span className="x">
                                X
                            </span>
                        </button>
                    </div>
                    <br/>


                    <div className="border1">

                   

                    <em className="colour1 shadow12 size1 ">
                    <b className="shadeBack1">
                        Just a reminder this test is made for NON-OFFICIAL research
                        purposes. <br /> We collect your data and sell it 
                        to {""}
                        <span className="underline">
                            unauthorised people.    
                        </span>
                        <br/>
                        Please proceed, only if you understand
                        <br/>
                        and at your own risk!
                    </b>
                    </em>
                    </div>
                

                </div>
        </div>
    )
}

export const Test = (props)=>{
   /// const imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
   const HisokaLink="/hisoka.jpeg"
    
    if (props.stage===0){
        if (props.secret<2){
            props.upText("Let's Begin!")}
        else {props.upText("START")}
        return(
            <div>


                <div className="border1 centered">
                    <br/>
                    <button 
                    onClick={()=>{
                        props.update(props.stage+1)
                        props.renderUpdate(false)
                    }}
                    className="goodText border">
                        {props.text}
                    </button>
                    <div className="border1 heightGame1 centeredMore">
                        {///<Image src={imageLink} alt="Hisoka" height="100%" width="100%"/>
    }
                    </div>
                </div>
            </div>

            )
        }

    else if (props.stage===1){
        return(
            <div>

               <div className="border1 heightGame1 centeredMore">
                    <div className="h-full">

                    <Image src={HisokaLink} alt="Hisoka" height={600} width={400} className="h-full w-full"/>
                    </div>
                </div>

                <div className="borderGame2 flexDisp flexEnd1 marginBlock">
                    <button 
                    onClick={()=>{
                    props.update(2)
                    props.makeItRainHoouray("rainImage")
                    }}
                    className=" goodText passButt border" >
                        Pass
                    </button>
            
                    <button 
                    className="goodText smashButt border"
                    onClick={()=>{
                        props.update(3)
                        props.makeItRainHoouray("fireworks")
                    }}>
                        Smash
                    </button>

        
                </div>
             </div>

        )
    }
    else if (props.stage===2){
        const youreDead="/queenEliz.jpg"
        return(
            <div >
       
               <div className="border1 heightGame1 centeredMore">
                   <Image src={youreDead} alt="your taste is gone" height="600" width="400" className="h-full"/>
              </div>

                <div className="borderGame2 flexDisp flexEnd1 marginBlock">
                    <button 
                    onClick={()=>{
                        props.update(0)
                        props.updateSecret(props.secret+1)
                        props.makeItRainHoouray("")
                    }}
                    className=" goodText border" >
                        Redo Test
                    </button>
            
                    <button 
                    className="goodText border"
                    onClick={()=>{
                        props.update(4)
                        props.makeItRainHoouray(""
                        )}}>
                        Accept Fate
                    </button>
              

        
                </div>
             </div>

        )
    }
    else if (props.stage===3){
        const rickLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        const happyLink="/smiley_face.png"
        return(
            <div className=" ">

               <div className=" heightGame1 centeredMore">
                    <div style={{height:"100%",width:"100%"}}>
                    
                    {<Image src={happyLink} alt="happy face!" height="600" width="400" className="h-full"/>
        }</div>
                </div>

                <div className=" flexDisp flexEnd1 marginBlock borderGame2 marginLeft11 marginRight ">
                    <button 
                    onClick={()=>{
                        props.update(0)
                        props.updateSecret(props.secret+1)
                        props.makeItRainHoouray("")
                    }}
                    className=" goodText border" >
                        Redo test
                    </button>
            
                    <a href={rickLink}>
                    <button 
                    className="goodText border">

                        Exit
                    </button>
                        </a>

        
                </div>
             </div>

        )
    }
}

export const HeaderGame = (props) => {
    
    if (props.stage===0){return (
        <div className="centered goodText">

            <span className="background1">
                Welcome!! To start the test press START.
            </span>

        </div>
    )
}

else if (props.stage===1){return (

    <div className=" goodText background1 ">

            <span>
                1)
            </span>
                <span style={{
                    color:"transparent",
                    textShadow:"none",
                    }}>
                    SMASH
                </span>
            <span className=" ">
                Would you smash or pass?
            </span>

        </div>
    )
    }


else if (props.stage===2){return (
    <div className="centered goodText ">
            <span className="background1">
                SAD NEWS
            </span>

        </div>
    )
    }
else if (props.stage===3){
    if (props.secret<2){
        }
    else {props.updateSecret2(". YOU FOUND THE EASTER EGG")}
    
    return (
    
    <div className="centered goodText background1">

            <span className="">
                LUCKY YOU {props.helpIamTired}
            </span>

        </div>
    )
    }
}

export const Description=(props)=>{
    if (props.stage===0){return (
        <div className="centered" style={{marginTop:"-60px"}}>
            <span>
                __________________________________
                <br/>
                As we all know, there has been <br/>
                a coronavirus pandemic the <br />
                past few years.. <br/>
                One of the most common lasting <br/>
                symptoms after an infection <br/>
                is <b>
                    Taste loss. <br/>
                    </b>
                    <br/>
                You can test your taste here!<br/>
                <br/>
                Description will be written here! <br/>
                CURRENTLY WORKS only on 16:9 landscape screens!! <br/>
                HTML IS BROKEN FOR MOBILES
            
            </span>
        </div>

    )}
    else if (props.stage===1){return (
        <div className="centered goodText1 descHeight">
            <span>
                Choose wisely <br/>
                <br/>
                Your taste level is greatly connected <br/>
                to wether or not you would smash Hisoka.
            
            </span>
      </div>
    )}
    else if (props.stage===2){return (
        <div className=" centered goodText1 descHeight">
            <span>
                Unfortunately it seems like<br/>
                you have 0 taste left. <br/>
                You were either born with no taste <br/>
                or Corona has obliterated all you had. <br/>
                My condolences brodda. My greetings to the QUEEN.
            
            </span>
      </div>
    )}

    else if (props.stage===3){return (
        <div className="centered goodText1 descHeight">
            <span>
                It seems like your taste<br/>
                is as sharp as my razorblade.<br/>
                I am so proud of you and <br/>
                <br/>
                Congratulations!!
            
            </span>
      </div>
    )}
    else if (props.stage===4){return (
        <div className="widthLast">
        <div className="lastPage  h-full">
                <Image src="/stars.webp"
                height="1500"
                width="2000"
                alt="starfall"
                className=" h-full"
                 />
            </div>

            <div className="centeredMore goodText1 heightGame" >
            <div className="centered marginTop">

            <span>
                I am sorry. May your next life be better..
                <br/>
                not to get emotional here but shit I just had <br/>
                a short spark of thoughts. Clair De Lune (remix) is playing<br/>
                The first line of this paragraph and the music <br/>
                gave me vibes like <br/>
                Oh shit.. All the moments you made the wrong decision<br/>
                in this life.. <br/>
                All the fun moments you never had <br/>
                All the love and feelings of acceptance you&apos;ve missed.<br/>
                <br/>
                And the worst part..<br/>
                You will never get the chance to relive anything again<br/>
                You won&apos;t get a second life.. And if you get one <br/>
                It doesn&apos;t change anything.. Sorry to destroy all your hopes<br/>
                intentionally.. But when we die there is a screen like this..<br/>
                There is no &quot;Redo&quot; button.. We will be lost for eternity..
                <br/> <br/>
                Please think about yourself and your happiness
                <br/> and health
                <br/>
                <br/> But I please you more to not disturb/hurt others..
                <br/> Think before you do anything <br/>
                Don&apos;t ruin their only life.. <br/>
                They can&apos;t redo everything but avoid you<br/>
                You can&apos;t change your past actions <br/>
                You can&apos;t bring them back..

                <br/><br/>
                music: you not the same (deep version) - tilekid


            
            </span>
            </div>
            </div>
      </div>
    )}


}