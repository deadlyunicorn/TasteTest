'use client'

import { useEffect,useState } from "react"
import "./Loader.css"

export const Fly =()=>{

    const [timer,updateTime]=useState(0)
    const [i,upDot]=useState(1)





    return(
        <div style={{backgroundColor:"blue",margin:"0px",padding:'0px'}}>

            {
               (timer<2) &&
                <Loader 
                    timer={timer} 
                    updateTime={updateTime} 
                    i={i} 
                    upDot={upDot}
                    />
                    
                    
            }
            {

           //     <p style={{
             //       textAlign:"center",
               //     color:"red"
               // }}>
               //</div> hello world!
            //</p>
            }
        </div>
    )
}

export const Loader =(props)=>{

    useEffect(
        ()=>{
            if (props.timer<2){
            const countDown = setInterval(
                ()=>{
                    
                    props.updateTime(props.timer+0.1)
                    if (props.i<3){
                        props.upDot(props.i+1)
                    } 
                    else{props.upDot(1)}
                },400
            )

            return()=>clearInterval(countDown)
        }
    },[props]
    )
        return(
            <div style={{position:'absolute'}} className=" maxPage fitAll">
                <div className='textCool fitAll'>
                    
                    <div className='boxTop'>
                        <p className='textCenter coolerText'>
                            This test is going to test your taste 
                        </p>
                    </div>

                    <div className='boxTop mtop5'>
                    <p> Loading.<span className={"transparent"+(props.i)}>
                        .</span><span className={"transparent"+(props.i-1)}>
                            .</span>
                    </p>
                    </div>
                </div>
            </div>
    )
}