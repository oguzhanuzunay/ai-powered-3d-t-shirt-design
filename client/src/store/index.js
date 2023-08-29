import { proxy } from "valtio";

const state = proxy ({
    intro: true,
    color:'#EFbd48',
    isLogoText: true,
    isFullTexture:false,
    logoDecal:'./threesj.png',
    fullDecal:'./threesj.png',
})

export default state;