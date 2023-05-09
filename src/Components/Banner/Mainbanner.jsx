
import image from "./Picsart_23-05-06_11-15-10-653.jpg"
import {Bannercontainer} from './bannerstyle'

export const Mainbanner = () =>{
    return (
        <Bannercontainer>
         <img style={{ width: '100%', height: "100%"}} src={image} alt='poster' />
        </Bannercontainer>
    )
}