import stylesLightMode from "./ClockLight.module.css"


import { useState , useRef , useEffect } from "react";

const Clock = () => {

    const [time , setTime] = useState(new Date());

    const [secDeg , setSecDeg] = useState(time.getSeconds());

    const [MinDeg , setMinDeg] = useState(time.getMinutes()*6);

    const [HoursDeg , setHoursDeg] = useState((time.getHours()%12)*35);

    const [clicked , setClicked] = useState(false)


useEffect(() => {
    const timer = setInterval(() => {
        setTime(new Date())
        setSecDeg(prev => prev + 6)
        const minutes = time.getMinutes()
        setMinDeg(minutes * 6)
        const hours = time.getHours() % 12
        setHoursDeg(hours * 30)
        } , 1000)
        return () => {clearInterval(timer)}
    }, [time])


    document.body.style.backgroundColor = clicked ? `rgb(18, 25, 36)` : `rgb(76, 140, 235)`


    return(
        <>
            <div className={`${clicked ? stylesLightMode.darkContainer:""} ${stylesLightMode.clockContainer}`}>
                <div className={`${clicked ? stylesLightMode.darkCenter:""} ${stylesLightMode.center}`}>
                    <div className={`${clicked ? stylesLightMode.darkHours:""} ${stylesLightMode.handHours}`} style={{transform: `rotate(${HoursDeg - 180}deg) translateY(35px)`}}></div>
                    <div className={`${clicked ? stylesLightMode.darkMinutes:""} ${stylesLightMode.handMinutes}`} style={{transform: `rotate(${MinDeg - 180}deg) translate(0px, 35px)`}}></div>
                    <div className={`${clicked ? stylesLightMode.darkSecounds:""} ${stylesLightMode.handSecounds}`} style={{transform: `rotate(${secDeg - 180}deg) translateY(${24}px)`}}></div>
                </div>
                <div className={`${clicked ? stylesLightMode.darkCircle:""} ${stylesLightMode.circle}`}></div>
            </div>

            <button onClick={() => setClicked(prev => !prev)} className={clicked?stylesLightMode.darkButton:""}>{clicked ? "Light Mode" : "Dark Mode"}</button>

        </>
    );
}

export default Clock